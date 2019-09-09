const {
  Rental,
  validate
} = require('./rental_model');
const {
  Customer
} = require('../customers/customer_model');
const {
  Guard
} = require('../guards/guard_model');
const {
  ensureAuth
} = require('../../middleware/auth');
const mongoose = require('mongoose');
const Fawn = require('fawn');
const express = require('express');

const router = express.Router();

Fawn.init(mongoose);

/**
 * GET all
 */
router.get('/', async (req, res) => {
  const rentals = await Rental.find().sort('-dateRental');
  res.send(rentals);
});

/**
 * GET by id
 */
router.get('/:id', async (req, res) => {
  const guard = await Rental.findById(req.params.id);
  if (!guard) {
    return res.status('404').send('Rental with the given ID was not found.');
  }
  return res.send(guard);
});

/**
 * POST
 */
router.post('/', ensureAuth, async (req, res) => {
  const {
    error
  } = validate(req.body);
  if (error) {
    return res.status('400').send(error.details[0].message);
  }
  // Check if customer and guard exist
  const customer = await Customer.findById(req.body.customerId);
  if (!customer) {
    return res.status('404').send('Customer with the given ID was not found.');
  }
  const guard = await Guard.findById(req.body.movieId);
  if (!customer) {
    return res.status('404').send('Guard with the given ID was not found.');
  }

  if (guard.numberInStock === 0) {
    return res.status(400).send('Guard not in stock.');
  }

  const rental = new Rental({
    customer: {
      _id: customer._id,
      name: customer.name,
      phone: customer.phone
    },
    guard: {
      _id: guard._id,
      title: guard.title,
      dailyRentalRate: guard.dailyRentalRate
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate
  });

  // Save rental and decrease guard stock
  // Use Fawn to treat this as an atomic transaction
  try {
    new Fawn.Task()
      .save('rentals', rental)
      .update(
        'movies', {
          _id: guard._id
        }, {
          $inc: {
            numberInStock: -1
          }
        }
      )
      .run();

    return res.send(rental);
  } catch (ex) {
    return res.status(500).send('Something failed.');
  }
});

module.exports = router;
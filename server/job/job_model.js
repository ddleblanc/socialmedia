const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');

const workday = new mongoose.Schema({
  day: {
    type: Date,
    required: true
  },
  timeStart: {
    type: Date,
    required: true
  },
  timeEnd: {
    type: Date,
    required: true
  }
})

const jobSchema = new mongoose.Schema({
  // Custom customer and movie schemas to persist only the absolute essential
  // customer and movie properties when displaying a job document
  model: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  photographer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  workdays: [workday],
  specialFee: {
    type: Number,
    min: 0
  }
});


/**
 * Process a job return
 */
// jobSchema.methods.return = function () {
//   this.dateReturn = new Date();

//   const jobDays = moment().diff(this.dateJob, 'days');
//   this.jobFee = jobDays * this.movie.dailyJobRate;
// };


const Job = mongoose.model('Job', jobSchema);

/**
 * Helper function - Joi validation
 */
function validateJob(job) {
  const schema = {
    // only customer id and movie id are sent to the api
    customerId: Joi.objectId().required(),
    guardId: Joi.objectId().required()
  };

  return Joi.validate(job, schema);
}

exports.Job = Job;
exports.validate = validateJob;
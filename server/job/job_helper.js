const moment = require('moment');

var DateHelper = (function () {
    // private date varialble
    const todaysDate = moment(new Date())

    // public function
    const checkCancellationPeriod = function (date) {
        const cancellationDate = moment(date);
        const isWithinCancellationPeriod = cancellationDate.diff(todaysDate, 'days') >= 14;
        return isWithinCancellationPeriod;
    }
    // public function
    const checkAvailability = function (date, unAvailableDates) {
        console.log(unAvailableDates.includes(date))
        return unAvailableDates.includes(date);
    }
    return {
        checkCancellationPeriod: checkCancellationPeriod,
        checkAvailability: checkAvailability
    }
})()

module.exports = {
    DateHelper: DateHelper
}
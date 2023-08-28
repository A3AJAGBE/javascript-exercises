const leapYears = function(year) {
  if (!Number.isInteger(year)) {
    return "ERROR";
  } else {
    if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
      return true;
    } else {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = leapYears;

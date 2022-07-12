//  Function that returns the largest of three values

const getLargest = (a, b, c) => {
  if (a && b && c) {
    return Math.max(a, b, c);
  } else {
    throw "ERROR: all inputs must have a value";
  }
};

const getSmallest = (a, b, c) => {
  if (a && b && c) {
    return Math.min(a, b, c);
  } else {
    throw "ERROR: all inputs must have a value";
  }
};

// Export the function so it's available to other files - used module.exports when using require
module.exports = {
  getLargest,
  getSmallest,
};

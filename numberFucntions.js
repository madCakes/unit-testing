//  Function that returns the largest of three values

const getLargest = (a, b, c) => {
  return Math.max(a, b, c);
};

const getSmallest = (a, b, c) => {
  return Math.min(a, b, c);
};

// Export the function so it's available to other files - used module.exports when using require
module.exports = getLargest;

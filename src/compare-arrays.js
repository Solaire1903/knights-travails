/**
 * Compares two arrays
 * @param {Array<Number>} arrayOne The first array
 * @param {Array<Number>} arrayTwo The second array
 * @returns True if the arrays are equal, false otherwise
 */
const arraysAreEqual = (arrayOne, arrayTwo) => {
  return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
};

/**
 * Checks if a two dimensional array contains a given array
 * @param {Array<Array<Number>>} twoDimArray The array to search through
 * @param {Array<Number>} array The array to look for
 * @returns True if the array is in the two-dimensional array, false otherwise
 */
const includesArray = (twoDimArray, array) => {
  return JSON.stringify(twoDimArray).indexOf(JSON.stringify(array)) === -1
    ? false
    : true;
};

export { arraysAreEqual, includesArray };

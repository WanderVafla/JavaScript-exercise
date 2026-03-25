/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  // Write your code here
  if (Number.isFinite(diameter) && diameter >= 0) {
      return (Math.PI/6) *Math.pow(diameter, 3);
  } else {
    throw new Error()
  }
}
// computeSphereVolume(10)
/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  // Write your code here
  if (Number.isFinite(n)) {
    return Math.round(n * 10) / 10
  } else {
    throw new Error()
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
  if (Array.isArray(grades)) {
    for (const i of grades) {
      if (!Number.isFinite(i)) {
        throw new Error();
      }
    }
    return grades.reduce((acc, n) => acc + n) / grades.length;
  } else {
    throw new Error();
  }
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
   if (Array.isArray(grades)) {
    for (const i of grades) {
      if (!Number.isFinite(i)) {
        throw new Error();
      }
    }
    return Math.round((grades.reduce((acc, n) => acc + n) / grades.length) * 10) / 10;
  } else {
    throw new Error();
  }
}

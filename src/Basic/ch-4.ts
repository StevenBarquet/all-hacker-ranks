/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const x = [11, 2, 4];
  const y = [4, 5, 6];
  const z = [10, 8, -12];
  const a = [x, y, z]; // (a[0])[1]
  const result = diagonalDifference(a);
  console.log('Result: ', result);
}

/**
 * Complete the 'diagonalDifference' function below.
 * @param {number[][]} arr The function accepts 2D_INTEGER_ARRAY arr as parameter.
 * @returns {number} The function is expected to return an INTEGER.
 */
function diagonalDifference(arr: number[][]): number {
  // Write your code here
  const n = arr.length;
  let diag1 = 0; // 4
  let diag2 = 0;
  for (let i = 0; i < n; i++) {
    // i = 3
    for (let j = 0; j < n; j++) {
      // j = 3
      if (i === j) {
        diag1 += arr[i][j];
      }
      // diag1= 4
    }
  }
  for (let i = 0; i < n; i++) {
    // i = 2
    for (let j = 0; j < n; j++) {
      // j = 0
      if (i + j === n - 1) {
        diag2 += arr[i][j];
      }
      // diag2 = 19
    }
  }

  return Math.abs(diag2 - diag1);
}

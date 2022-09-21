/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 2, 3, 4, 10, 11];
  const result = aVeryBigSum(testArray);
  console.log('Result: ', result);
}

/** Function that summ al the elements in an array of numbers */
function aVeryBigSum(ar: number[]): number {
  // Write your code here
  let sum = 0;
  ar.forEach((num) => (sum += num));
  return sum;
}

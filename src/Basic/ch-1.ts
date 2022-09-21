/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  const testArray = [1, 2, 3, 4, 10, 11];
  const result = simpleArraySum(testArray);
  console.log('Result: ', result);
}

/** Function that summ al the elements in an array of numbers */
function simpleArraySum(ar: Array<number>): number {
  let suma = 0;
  ar.forEach((element) => (suma += element));
  return suma;
}

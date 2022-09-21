/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const a = [-4, 3, -9, 0, 4, 1];
  const result = plusMinus(a);
  console.log('Result: ', result);
}

/**
 * Complete the 'plusMinus' function below.
 * @param {number[]} arr The function accepts INTEGER_ARRAY arr as parameter.
 * @returns {number} The function is expected to return an INTEGER.
 */
function plusMinus(arr: number[]): void {
  const { length } = arr;
  let positives = 0;
  let negative = 0;
  let neutrals = 0;

  for (let i = 0; i < length; i++) {
    const element = arr[i];
    if (element > 0) {
      positives++;
    } else if (element < 0) {
      negative++;
    } else {
      neutrals++;
    }
  }

  console.log('Positives: ', positives / length);
  console.log('Negative: ', negative / length);
  console.log('Neutrals: ', neutrals / length);
}

/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const a = [3, 2, 1, 3];
  const result = birthdayCakeCandles(a);
  console.log('Result: ', result);
}

/**
 * CComplete the 'birthdayCakeCandles' function below.
 * @param {number[]} arr The function accepts INTEGER_ARRAY arr as parameter.
 * @returns {number} The function is expected to return an INTEGER.
 */
function birthdayCakeCandles(candles: number[]): number {
  /** */
  function getMax(array: number[]): number {
    let max = array[0];
    array.forEach((element) => {
      if (max < element) {
        max = element;
      }
    });
    return max;
  }

  /** */
  function countMax(array: number[], maxNum: number) {
    let count = 0;
    array.forEach((element) => {
      if (element === maxNum) {
        count++;
      }
    });
    return count;
  }

  const maxTall = getMax(candles);

  return countMax(candles, maxTall);
}

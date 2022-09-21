/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const a = 4;
  const result = staircase(a);
  console.log('Result: ', result);
}

/**
 * Complete the 'plusMinus' function below.
 * @param {number[]} arr The function accepts INTEGER_ARRAY arr as parameter.
 * @returns {number} The function is expected to return an INTEGER.
 */
function staircase(n: number): void {
  // Write your code here
  for (let i = n; i > 0; i--) {
    let hash = '';
    let spaces = '';
    for (let j = i - 1; j < n; j++) {
      hash += '#';
    }
    for (let j = i - 2; j >= 0; j--) {
      spaces += ' ';
    }
    console.log(spaces + hash);
  }
}

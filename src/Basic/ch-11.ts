/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const s = 7;
  const t = 11;
  const appleTree = 5;
  const orangeTree = 15;
  const apples = [-2, 2, 1];
  const oranges = [5, -6];
  const result = countApplesAndOranges(s, t, appleTree, orangeTree, apples, oranges);
  console.log('Result: ', result);
}

/**
 * Complete the 'countApplesAndOranges' function below.
 */
function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  /** */
  function calculateInRange(
    fruits: number[],
    start: number,
    end: number,
    treePosition: number
  ): number {
    let counter = 0;
    fruits.forEach((element) => {
      const fruitPosition = treePosition + element;
      const isInRange = fruitPosition >= start && fruitPosition <= end;
      if (isInRange) {
        counter++;
      }
    });
    return counter;
  }
  const applesInRange = calculateInRange(apples, s, t, a);
  const orangesInRange = calculateInRange(oranges, s, t, b);
  console.log(applesInRange);
  console.log(orangesInRange);
}

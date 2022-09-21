/**
 * Ejecuta ésta funcion para probar el siguiente hacker rank challange:
 * {@link https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true}
 */
export function challangeTester(): void {
  console.log('---------- Cool Programing ----------\n');
  const a = [73, 67, 45, 33];
  const result = gradingStudents(a);
  console.log('Result: ', result);
}

/**
 * Complete the 'gradingStudents' function below.
 * @param {number[]} grades The function is expected to return an INTEGER_ARRAY.
 * @returns {number[]} The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades: number[]): number[] {
  /** */
  function toRound(grade: number): number {
    const next5 = 5 - (grade % 5);
    const willRound = grade >= 38 && next5 < 3;
    if (willRound) {
      return grade + next5;
    }
    return grade;
  }
  const fixedGrades = grades.map((element) => toRound(element));

  return fixedGrades;
}

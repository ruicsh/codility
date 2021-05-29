// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

function passingCars(A: number[]): number {
  const sum = A.reduce((acc, value) => acc + value, 0);
  const upTo = [A[0]];
  for (let i = 1; i < A.length; i += 1) {
    upTo[i] = upTo[i - 1] + A[i];
  }

  const goingEast = [];
  for (let car = 0; car < A.length; car += 1) {
    if (A[car] === 0) {
      goingEast.push(car);
      car = A.indexOf(0, car);
    }
  }

  let passing = 0;
  for (let car = 0; car < goingEast.length; car += 1) {
    passing += sum - upTo[goingEast[car]];
    if (passing > 1_000_000_000) return -1;
  }

  return passing;
}

describe('passingCars', () => {
  it.each([
    [[0, 1], 1],
    [[1, 0, 1], 1],
    [[0, 1, 0, 1, 1], 5],
    [[0, 1, 0, 1, 1, 0, 1, 1, 0], 11],
    [[0, 1, 0, 1, 0, 1], 6],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = passingCars(A);
    expect(result).toBe(expected);
  });
});

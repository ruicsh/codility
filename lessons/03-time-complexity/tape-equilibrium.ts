// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function tapeEquilibrium(A: number[]): number {
  const total = A.reduce((acc, value) => acc + value);

  let min = Infinity;
  let firstPartSum = 0;
  let secondPartSum = 0;
  for (let i = 0; i < A.length - 1; i += 1) {
    firstPartSum += A[i];
    secondPartSum = total - firstPartSum;
    const diff = Math.abs(firstPartSum - secondPartSum);
    if (diff < min) min = diff;
  }

  return min;
}

describe('tapeEquilibrium', () => {
  it.each([
    [[3, 1, 2, 4, 3], 1],
    [[5, 6, 2, 4, 1], 4],
    [[-1000, 1000], 2000],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = tapeEquilibrium(A);
    expect(result).toBe(expected);
  });
});

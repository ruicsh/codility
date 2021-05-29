// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function permMissingElem(A: number[]): number {
  const maxNumber = A.length + 1;
  const consecutiveSum = (maxNumber * (maxNumber + 1)) / 2;
  const sum = A.reduce((acc, value) => acc + value, 0);

  return consecutiveSum - sum;
}

describe('permMissingElem', () => {
  it.each([
    [[], 1],
    [[2], 1],
    [[2, 3], 1],
    [[2, 3, 4, 5], 1],
    [[2, 3, 1, 5], 4],
    [[4, 2, 3, 5, 1, 6, 8, 9], 7],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = permMissingElem(A);
    expect(result).toBe(expected);
  });
});

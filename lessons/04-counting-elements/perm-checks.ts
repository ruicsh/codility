// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

function permCheck(A: number[]): number {
  const maxNumber = A.length;
  const consecutiveSum = (maxNumber * (maxNumber + 1)) / 2;
  const sum = [...new Set(A)].reduce((acc, value) => acc + value, 0);

  return consecutiveSum - sum === 0 ? 1 : 0;
}

describe('permChecks', () => {
  it.each([
    [[1], 1],
    [[1, 2], 1],
    [[2, 1], 1],
    [[4, 1, 3, 2], 1],
    [[4, 1, 3], 0],
    [[2, 3, 4], 0],
    [[1, 4, 1], 0],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = permCheck(A);
    expect(result).toBe(expected);
  });
});

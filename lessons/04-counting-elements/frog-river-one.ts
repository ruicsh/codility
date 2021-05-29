// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

function frogRiverOne(X: number, A: number[]): number {
  const holdValues = new Set();
  for (let i = 0; i < A.length; i += 1) {
    holdValues.add(A[i]);
    if (holdValues.size === X) return i;
  }

  return -1;
}

describe('frogRiverOne', () => {
  it.each([
    [1, [], -1],
    [1, [1], 0],
    [5, [1, 3, 1, 4, 2, 3, 5, 4], 6],
    [5, [1, 3, 1, 2, 2, 3, 5, 4], 7],
    [5, [1, 3, 1, 2, 2, 3, 5, 3], -1],
  ])('%s', (X, A, expected) => {
    expect.assertions(1);
    const result = frogRiverOne(X, A);
    expect(result).toBe(expected);
  });
});

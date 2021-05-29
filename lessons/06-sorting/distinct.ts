// https://app.codility.com/programmers/lessons/6-sorting/distinct/

function distinct(A: number[]): number {
  return [...new Set(A)].length;
}

describe('distinct', () => {
  it.each([[[2, 1, 1, 3, 2, 1], 3]])('%s', (A, expected) => {
    expect.assertions(1);
    const result = distinct(A);
    expect(result).toBe(expected);
  });
});

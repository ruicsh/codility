// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

function countDiv(A: number, B: number, K: number): number {
  const firstDiv = Math.floor(A / K);
  const lastDiv = Math.floor(B / K);
  const offset = A % K === 0 ? 1 : 0;

  return lastDiv - firstDiv + offset;
}

describe('countDiv', () => {
  it.each([
    [6, 11, 2, 3],
    [0, 0, 11, 1],
    [1, 1, 11, 0],
    [11, 345, 17, 20],
  ])('%s %s %s', (A, B, K, expected) => {
    expect.assertions(1);
    const result = countDiv(A, B, K);
    expect(result).toBe(expected);
  });
});

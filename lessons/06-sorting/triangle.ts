// https://app.codility.com/programmers/lessons/6-sorting/triangle/

function triangle(A: number[]): number {
  if (A.length < 3) return 0;
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i += 1) {
    const p = A[i];
    const q = A[i + 1];
    const r = A[i + 2];

    if (p + q > r) return 1;
  }

  return 0;
}

describe('triangle', () => {
  it.each([
    [[10, 2, 5, 1, 8, 20], 1],
    [[10, 50, 5, 1], 0],
  ])('%s', (a, expected) => {
    expect.assertions(1);
    const result = triangle(a);
    expect(result).toBe(expected);
  });
});

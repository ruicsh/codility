// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function maxProductOfThree(A: number[]): number {
  const sorted = A.sort((a, b) => a - b);

  return Math.max(
    sorted[sorted.length - 1] *
      sorted[sorted.length - 2] *
      sorted[sorted.length - 3],
    sorted[sorted.length - 1] * sorted[0] * sorted[1]
  );
}

describe('maxProductOfThree', () => {
  it.each([
    [[1, 2, 3], 6],
    [[-3, 1, 2, -2, 5, 6], 60],
    [[-5, 5, -5, 4], 125],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = maxProductOfThree(A);
    expect(result).toBe(expected);
  });
});

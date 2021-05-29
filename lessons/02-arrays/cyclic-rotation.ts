// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function cyclicRotation(A: number[] = [], K = 0): number[] {
  if (K === 0 || A.length === 0) return A;

  return cyclicRotation([A.pop() as number, ...A], K - 1);
}

describe('cyclicRotation', () => {
  it.each([
    [undefined, 1, []],
    [[], 1, []],
    [[1], 1, [1]],
    [[3, 8, 9, 7, 6], 1, [6, 3, 8, 9, 7]],
    [[3, 8, 9, 7, 6], 3, [9, 7, 6, 3, 8]],
    [[0, 0, 0], 1, [0, 0, 0]],
    [[1, 2, 3, 4], 4, [1, 2, 3, 4]],
  ])('%s, %s', (A, K, expected) => {
    expect.assertions(1);
    const result = cyclicRotation(A, K);
    expect(result).toStrictEqual(expected);
  });
});

// https://app.codility.com/programmers/task/prefix_set/

function prefixSet(A: number[]): number {
  const uniqs = new Set(A);

  let prefix = uniqs.size;
  const uniqsBefore = new Set(A.slice(0, prefix));
  for (prefix; prefix < A.length; prefix += 1) {
    if (uniqsBefore.size === uniqs.size) break;
    uniqsBefore.add(A[prefix]);
  }

  return prefix - 1;
}

describe('prefixSet', () => {
  it.each([
    [[0], 0],
    [[0, 1, 0], 1],
    [[2, 2, 1, 0, 1], 3],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = prefixSet(A);
    expect(result).toBe(expected);
  });
});

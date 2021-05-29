// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/

function maxCounters(N: number, A: number[]) {
  const counters = Array.from({ length: N }, () => 0);
  let max = 0;
  let maxToSet = 0;

  for (let i = 0; i < A.length; i += 1) {
    const x = A[i];
    if (x <= N) {
      counters[x - 1] = Math.max(counters[x - 1], maxToSet) + 1;
      max = Math.max(max, counters[x - 1]);
    } else {
      maxToSet = max;
    }
  }

  return counters.map((value) => Math.max(value, maxToSet));
}

describe('maxCounters', () => {
  it.each([
    [1, [1], [1]],
    [5, [3], [0, 0, 1, 0, 0]],
    [5, [3, 4], [0, 0, 1, 1, 0]],
    [5, [3, 4, 4], [0, 0, 1, 2, 0]],
    [5, [3, 4, 4, 6], [2, 2, 2, 2, 2]],
    [5, [3, 4, 4, 6, 1], [3, 2, 2, 2, 2]],
    [5, [3, 4, 4, 6, 1, 4, 4], [3, 2, 2, 4, 2]],
  ])('%s, %s', (N, A, expected) => {
    expect.assertions(1);
    const result = maxCounters(N, A);
    expect(result).toStrictEqual(expected);
  });
});

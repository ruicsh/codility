// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

function missingInteger(A: number[]): number {
  const sorted = [...new Set(A.sort((x, y) => x - y))];
  const max = Math.max(...sorted);

  let missingInt = 1;
  let currentIndex = 0;
  for (missingInt; missingInt <= max; missingInt += 1) {
    currentIndex = A.indexOf(missingInt, currentIndex);
    if (currentIndex === -1) break;
  }

  return missingInt;
}

describe('missingInteger', () => {
  it.each([
    [[2], 1],
    [[1, 2, 3], 4],
    [[-1, -3], 1],
    [[1, 3, 6, 4, 1, 2], 5],
    [
      [
        ...Array.from({ length: 100 }, (_, i) => i + 1),
        ...Array.from({ length: 100 }, (_, i) => i + 102),
      ],
      101,
    ],
  ])('%s', (A, expected) => {
    expect.assertions(1);
    const result = missingInteger(A);
    expect(result).toBe(expected);
  });
});

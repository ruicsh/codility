// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function oddOccurrencesInArray(A: number[] = []): number {
  const sorted = A.sort((a, b) => a - b);

  let odd = -1;
  for (let i = 0; i < sorted.length; i += 2) {
    if (sorted[i] !== sorted[i + 1]) {
      odd = sorted[i];
      break;
    }
  }

  return odd;
}

describe('oddOccurrencesInArray', () => {
  it.each([[[9, 3, 9, 3, 9, 7, 9], 7]])('%s', (A, expected) => {
    expect.assertions(1);
    const result = oddOccurrencesInArray(A);
    expect(result).toStrictEqual(expected);
  });
});

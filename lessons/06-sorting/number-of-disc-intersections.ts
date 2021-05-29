// https://app.codility.com/programmers/task/number_of_disc_intersections/

function numberOfDiscIntersections(A: number[]): number {
  const discs = A.map((r, x) => [x - r, x + r]).sort((da, db) => da[0] - db[0]);

  let nIntersections = 0;
  for (let i = 0; i < discs.length; i += 1) {
    for (let j = i + 1; j < discs.length; j += 1) {
      if (discs[j][0] <= discs[i][1]) {
        nIntersections += 1;
        if (nIntersections > 10_000_000) return -1;
      } else {
        break;
      }
    }
  }

  return nIntersections;
}

describe('numberOfDiscIntersections', () => {
  it.each([[[1, 5, 2, 1, 4, 0], 11]])('%s', (A, expected) => {
    expect.assertions(1);
    const result = numberOfDiscIntersections(A);
    expect(result).toBe(expected);
  });
});

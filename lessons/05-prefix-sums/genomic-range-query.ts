// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

function genomicRangeQuery(S: string, P: number[], Q: number[]): number[] {
  return P.map((p, i) => {
    const dna = S.slice(p, Q[i] + 1);
    if (dna.indexOf('A') > -1) return 1;
    if (dna.indexOf('C') > -1) return 2;
    if (dna.indexOf('G') > -1) return 3;
    return 4;
  });
}

describe('genomicRangeQuery', () => {
  it.each([['CAGCCTA', [2, 5, 0], [4, 5, 6], [2, 4, 1]]])(
    '%s %s %s',
    (S, P, Q, expected) => {
      expect.assertions(1);
      const result = genomicRangeQuery(S, P, Q);
      expect(result).toStrictEqual(expected);
    }
  );
});

// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function dec2bin(dec: number): string {
  // eslint-disable-next-line no-bitwise
  return (dec >>> 0).toString(2);
}

function binaryGap(N: number): number {
  return dec2bin(N)
    .replace(/0*$/, '')
    .split('1')
    .reduce((acc, zeros) => Math.max(zeros.length, acc), 0);
}

describe('binaryGap', () => {
  it.each([
    [9, 2],
    [20, 1],
    [15, 0],
    [1041, 5],
    [32, 0],
    [1610612737, 28],
  ])('%s -> %s', (N, expected) => {
    expect.assertions(1);
    const result = binaryGap(N);
    expect(result).toBe(expected);
  });
});

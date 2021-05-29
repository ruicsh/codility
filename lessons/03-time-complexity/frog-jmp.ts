// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function frogJmp(X: number, Y: number, D: number): number {
  return Math.ceil((Y - X) / D);
}

describe('frogJmp', () => {
  it.each([[10, 85, 30, 3]])('%s, %s, %s', (X, Y, D, expected) => {
    expect.assertions(1);
    const result = frogJmp(X, Y, D);
    expect(result).toBe(expected);
  });
});

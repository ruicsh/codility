/* eslint-disable no-continue */
// https://app.codility.com/programmers/task/count_palindromic_slices/

function isPalindrome(s: string): boolean {
  return s === [...s].reverse().join('');
}

// TODO: only 35%
function countPalindromicSlices(S: string): number {
  const palindromes = [];
  for (let i = 0; i < S.length; i += 1) {
    for (let j = 0; j <= S.length; j += 1) {
      if (j - i < 2) continue;
      const substr = S.slice(i, j);
      if (isPalindrome(substr)) {
        palindromes.push(substr);
        if (palindromes.length > 100_000_000) return -1;
      }
    }
  }

  return palindromes.length;
}

describe('countPalindromicSlices', () => {
  it.each([['baababa', 6]])('%s', (s, expected) => {
    expect.assertions(1);
    const result = countPalindromicSlices(s);
    expect(result).toBe(expected);
  });
});

// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

const limiters: Record<string, string> = {
  '(': ')',
  '{': '}',
  '[': ']',
};

const openers = Object.keys(limiters);

// TODO: 87%
function brackets(S: string): number {
  const stack: string[] = [];

  S.split('').forEach((ch) => {
    if (openers.includes(ch)) stack.push(ch);
    const currentOpened = stack[stack.length - 1];
    if (limiters[currentOpened] === ch) stack.pop();
  });

  return stack.length ? 0 : 1;
}

describe('brackets', () => {
  it.each([
    ['{[()()]}', 1],
    ['([)()]', 0],
  ])('%s', (S, expected) => {
    expect.assertions(1);
    const result = brackets(S);
    expect(result).toBe(expected);
  });
});

function sum(a, b) {
  return a + b;
}

test('adds 2 numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

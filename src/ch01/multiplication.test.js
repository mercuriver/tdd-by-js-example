test('$5 * 2 = $10', () => {
  const five = new Dallar(5);
  five.times(2);
  expect(five.amount).toBe(10);
});

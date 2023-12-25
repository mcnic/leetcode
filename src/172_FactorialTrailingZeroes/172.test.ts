/*
2 5 = 10   num(5) = 1
2^a * 5^b  * x ...  num(5) = 7
*/

function trailingZeroes(n: number): number {
  let sum = 0,
    num = 5;
  while (num <= n) {
    sum += (n / num) | 0;
    num *= 5;
    console.log(sum, num);
  }
  return sum;
}

test('factor trailing', () => {
  expect(trailingZeroes(3)).toBe(0);
  expect(trailingZeroes(5)).toBe(1);
  expect(trailingZeroes(0)).toBe(0);
  expect(trailingZeroes(30)).toBe(7);
});

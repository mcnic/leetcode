/**
 * there is problem with cycling algorythm. Need control cycle - the best is 2 point algorythm with fast & slow points
 */
function isHappyWrong(n: number): boolean {
  let num: number[] = n
    .toString()
    .split('')
    .map(e => Number(e));
  let sum = num.reduce((acc, el) => acc + el * el, 0);
  //   console.log(sum, num);
  while (sum > 4) {
    sum = num.reduce((acc, el) => acc + el * el, 0);
    num = sum
      .toString()
      .split('')
      .map(e => Number(e));
    // console.log(sum, num);
  }

  return sum === 1;
}

function getNum(n: number): number {
  let sum = 0;
  while (n) {
    const last = n % 10;
    sum += last * last;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n: number): boolean {
  let slow = n;
  let fast = getNum(n);
  while (fast != 1 && fast !== slow) {
    console.log(slow, fast);
    slow = getNum(slow);
    fast = getNum(getNum(fast));
  }

  return fast === 1;
}

test('happy num', () => {
  expect(isHappy(19)).toBe(true);
  expect(isHappy(2)).toBe(false);
  expect(isHappy(1)).toBe(true);
  expect(isHappy(7)).toBe(true);
});

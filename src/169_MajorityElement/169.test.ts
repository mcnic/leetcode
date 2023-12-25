function majorityElement(nums: number[]): number {
  const m: {[key: string]: number} = {};
  for (const i of nums) {
    if (m[i]) {
      m[i] += 1;
    } else {
      m[i] = 1;
    }
  }
  console.log(m);

  const arr = Object.keys(m);
  if (!arr.length) {
    return 0;
  }

  return arr.reduce((acc, el) => {
    console.log(el, m[el], acc, m[el], m[acc], m[el] > m[acc], Number(el));
    return m[el] > m[acc] ? Number(el) : acc;
  }, Number(arr[0]));
}

test('majority elem', () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  expect(majorityElement([3, 3, 4])).toBe(3);
});

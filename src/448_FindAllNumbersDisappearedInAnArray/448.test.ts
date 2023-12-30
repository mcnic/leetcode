function findDisappearedNumbersSlow(nums: number[]): number[] {
  let res = new Uint16Array(nums.length);
  for (let i in nums) {
    res[nums[i] - 1]++;
  }
  res = res.map((e, idx) => (e ? 0 : idx + 1)).filter(e => e);

  return Array.from(res);
}

function findDisappearedNumbers(nums: number[]): number[] {
  for (let i in nums) {
    const m = Math.abs(nums[i]) - 1;
    if (nums[m] > 0) {
      nums[m] = -nums[m];
    }
  }
  //   console.log(nums);

  //   return nums.map((e, idx) => (e < 0 ? 0 : idx + 1)).filter(e => e);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
}

test('disappered numbers', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
});

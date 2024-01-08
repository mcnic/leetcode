function findLengthOfLCIS(nums: number[]): number {
  let max = 1;
  let tmpLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      max = Math.max(max, tmpLen);
      tmpLen = 1;
    } else {
      tmpLen++;
    }
  }
  return (max = Math.max(max, tmpLen));
}

test('lengest continuus', () => {
  expect(findLengthOfLCIS([1, 3, 5, 4, 7])).toBe(3);
  expect(findLengthOfLCIS([2, 2, 2, 2, 2])).toBe(1);
  expect(findLengthOfLCIS([1, 3, 5, 7])).toBe(4);
});

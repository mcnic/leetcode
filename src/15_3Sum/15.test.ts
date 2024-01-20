function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((a, b) => a - b);
  const len = nums.length - 1;
  // console.log(sorted)
  for (let i of nums.keys()) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const needed = -nums[i];
    let l: number = Number(i) + 1;
    let r: number = len;
    while (l < r) {
      if (nums[l] + nums[r] === needed) {
        // console.log(i,l,r, nums[i], nums[l], nums[r])
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
        continue;
      }
      if (nums[l] + nums[r] > needed) r--;
      else l++;
    }
  }

  return res;
}

test('3Sumtest', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
  expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
});

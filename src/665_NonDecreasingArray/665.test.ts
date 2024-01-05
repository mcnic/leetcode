/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You cannot get a non-decreasing array by modifying at most one element.
*/

/*
case 1: counting local mins (if next<prev), max mins is 1
case 2: 
*/

function checkPossibility(nums: number[]): boolean {
  if (nums.length <= 2) return true;

  for (let i = 1, max = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (
        max < 0 ||
        (i > 1 &&
          i < nums.length - 1 &&
          (nums[i + 1] < nums[i - 2] ||
            (nums[i - 1] > Math.max(nums[i - 2], nums[i + 1]) &&
              nums[i] < Math.min(nums[i - 2], nums[i + 1]))))
      ) {
        return false;
      }
      max--;
    }
  }
  return true;
}

test('checkPossibility', () => {
  expect(checkPossibility([4, 2, 3])).toBe(true);
  expect(checkPossibility([4, 2, 1])).toBe(false);
  expect(checkPossibility([-1, 4, 2, 3])).toBe(true);
  expect(checkPossibility([3, 4, 2, 3])).toBe(false);
  expect(checkPossibility([1, 3, 5, 2, 4])).toBe(false);
  expect(checkPossibility([1, 3, 5, 2, 4])).toBe(false);
});

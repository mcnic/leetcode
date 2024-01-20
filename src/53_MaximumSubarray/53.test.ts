/*
  not complete:
  may be use 'divide and conquer' strategy, but i not figure out now how it use in this issue...

  53. Maximum Subarray
Attempted
Medium
Topics
Companies
Given an integer array nums, find the
subarray
 with the largest sum, and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104


Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
/*
    not complete:
    may be use 'divide and conquer' strategy, but i not figure out now how it use in this issue...
    todo: Kadane's algorithm
*/
function maxSubArrayBad(nums: number[]): number {
  // console.log('before', nums)
  let maxSum: number = -Infinity;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const sum = nums.slice(l, r + 1).reduce((acc, el) => acc + el, 0);
    console.log('before', l, r, sum, maxSum, nums[l + 1], nums[r - 1]);
    if (sum > maxSum) {
      maxSum = sum;
    }

    if (nums[l] < nums[r]) {
      l++;
    } else {
      r--;
    }
    console.log('after', l, r, maxSum);
  }
  return maxSum;
}

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0],
    sum = nums[0];
  if (nums.length === 1) return maxSum;

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

test('maxSubarray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(maxSubArray([-1])).toEqual(-1);
  expect(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4])).toEqual(6);
});

/**
 Do not return anything, modify nums in-place instead.
*/
function rotate2(nums: number[], k: number): void {
  k %= nums.length;
  //   if (k === nums.length || !k || nums.length <= 1) return;

  const len = nums.length;

  const shiftArray = nums.slice(len - k);
  for (let i = len - 1; i >= k; i--) {
    nums[i] = nums[i - k];
    console.log(nums);
  }

  console.log(shiftArray, shiftArray.length);
  for (let i = 0; i < shiftArray.length; i++) {
    nums[i] = shiftArray[i];
    console.log(nums);
  }
}

function rotate1(nums: number[], k: number): void {
  k %= nums.length;
  if (k === nums.length || !k || nums.length <= 1) return;

  const reverse = (arr: number[], start: number, end: number) => {
    while (start < end) {
      const tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start++;
      end--;
    }
  };

  const len = nums.length;
  reverse(nums, 0, len - k - 1);
  reverse(nums, len - k, len - 1);
  reverse(nums, 0, len - 1);
}

test('rotary array', () => {
  let nums: number[] = [];

  nums = [1, 2, 3, 4, 5, 6, 7];
  rotate1(nums, 3);
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);

  nums = [1, 2, 3, 4];
  rotate1(nums, 2);
  expect(nums).toEqual([3, 4, 1, 2]);

  nums = [-1, -100, 3, 99];
  rotate1(nums, 2);
  expect(nums).toEqual([3, 99, -1, -100]);

  nums = [1];
  rotate1(nums, 1);
  expect(nums).toEqual([1]);

  nums = [1, 2];
  rotate1(nums, 1);
  expect(nums).toEqual([2, 1]);

  nums = [1, 2];
  rotate1(nums, 3);
  expect(nums).toEqual([2, 1]);

  nums = [1, 2, 3, 4, 5, 6];
  rotate1(nums, 4);
  expect(nums).toEqual([3, 4, 5, 6, 1, 2]);
});

function peakIndexInMountainArray(arr: number[]): number {
  //   console.log(arr);
  const n = arr.length;
  let l = 0,
    r = n - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid + 1] < arr[mid] && arr[mid - 1] < arr[mid]) return mid;
    if (arr[mid + 1] > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return r;
}

test('peakIndexInMountainArray', () => {
  expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
  expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
  expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
  expect(peakIndexInMountainArray([3, 4, 5, 1])).toBe(2);
  expect(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90])).toBe(
    5
  );
});

/*
88. Merge Sorted Array
Easy
Topics
Companies
Hint
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 Do not return anything, modify nums1 in-place instead.
 */
 function mergeSlow(nums1: number[], m: number, nums2: number[], n: number): void {
    console.log(nums1.length-m);
    
    nums1.splice(m, nums1.length-m, ...nums2)
    nums1.sort((a,b)=>a-b)
 };

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    let arr = []
    let i = 0, j = 0
    while(!(i >= m && j >= n)) {
        // console.log(arr, i, j)
        if(i >= m) {
            arr.push(nums2[j])
            j++
            continue
        }
        if(j >= n) {
            arr.push(nums1[i])
            i++
            continue
        }
        
        if(nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    nums1.splice(0, nums1.length, ...arr)
    // console.log('nums1', nums1)
};

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let arr = new Array(m+n)
    let l = 0, i = 0, j = 0
    while(!(i >= m && j >= n)) {
        // console.log(arr, i, j)
        if(i >= m) {
            arr[l++] = nums2[j++]
            continue
        }
        if(j >= n) {
            arr[l++] = nums1[i++]
            continue
        }
        
        if(nums1[i] < nums2[j]) {
            arr[l++] = nums1[i++]
        } else {
            arr[l++] = nums2[j++]
        }
    }
    nums1.splice(0, nums1.length, ...arr)
    // console.log('nums1', nums1)
};

 test('merge', () => {
    let nums1 = [1,2,3,0,0,0]
    merge(nums1, 3, [2,5,6], 3)
    expect(nums1).toEqual([1,2,2,3,5,6]);

    nums1 = [-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    merge(nums1, 55, [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9], 99)
    console.log(nums1);
    expect(nums1).toEqual([-10,-10,-10,-10,-9,-9,-9,-9,-9,-9,-9,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-4,-4,-4,-3,-3,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,-1,-1,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9]);
 })    

  
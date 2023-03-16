/*
371. Sum of Two Integers
Medium
3.4K
4.7K
Companies
Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
*/

function getSum(a: number, b: number): number {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
}

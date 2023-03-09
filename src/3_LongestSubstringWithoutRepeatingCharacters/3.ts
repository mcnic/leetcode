/*
3. Longest Substring Without Repeating Characters

Medium
32.6K
1.4K
Companies
Given a string s, find the length of the longest
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0
  if (s.length === 1) return 1

  let max = 1
  let l = 0
  while (l < s.length) {
    const c: string[] = [ s[l] ]
    let r = l + 1
    while (r < s.length) {
      let t = r-l
      if(c.indexOf(s[r]) > -1) {
        // console.log(c, 'wrong. push', s[r], l, r)

        if (t===s.length) return s.length
        if (t>max) max=t
        // console.log('max1=', t)
        break
      } else {
        // console.log(c, 'add', s[r])
        c.push(s[r])
        r++
        t++
        if (r === s.length && t>max) {
          max=t
          // console.log('max2=', r-l)
        }
      }
    }
    l++
  }
  return max
}
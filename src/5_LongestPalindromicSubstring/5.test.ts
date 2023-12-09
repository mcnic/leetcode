/*
5. Longest Palindromic Substring

Given a string s, return the longest
palindromic

substring
 in s.



Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

function longestPalindrome(s: string): string {
  const str = '|' + s.split('').join('|') + '|';
  return oddPolyndrome(str).replace(/\|/g, '');
}

function oddPolyndrome(s: string): string {
  console.log('s', s);
  if (!s.length) return '';
  if (s.length === 1) return s;

  const h = new Array(s.length).fill(0);
  let center = 0,
    radius = 0;
  let maxC = 0,
    maxR = 0;

  for (let i = 0; i < s.length; i++) {
    let j = 0;
    //todo: add optimizing for cases: include i in previous area (include, intersection, == border point)
    // console.log(i - j > 0, i + j < s.length, s[i + j] === s[i - j]);
    while (i - j > 0 && i + j < s.length && s[i + j + 1] === s[i - j - 1]) {
      j++;
    }
    h[i] = j;
    center = i;
    radius = j;
    if (radius > maxR) {
      maxC = i;
      maxR = radius;
    }
    console.log(i, j, center, radius, maxC, maxR, h);
  }

  return s.slice(maxC - maxR, maxC + maxR + 1);
}

test('longestPalindrome', () => {
  expect(longestPalindrome('')).toEqual('');
  expect(longestPalindrome('c')).toEqual('c');
  expect(longestPalindrome('cbbd')).toEqual('bb');
  expect(longestPalindrome('abb')).toEqual('bb');
  expect(longestPalindrome('cbbbbdddccdddb')).toEqual('bdddccdddb');
  expect(longestPalindrome('cbcd')).toEqual('cbc');
  expect(longestPalindrome('cabadaba')).toEqual('abadaba');
});

/*
20. Valid Parentheses
Solved
Easy
Topics
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s: string): boolean { 
  const pairs: {[key: string]: string} = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  const openBrakets = Object.keys(pairs)
  
  const p: string[] = []
  for(let i of s) {
    console.log(p, i, openBrakets.includes(i));
    
    if (openBrakets.includes(i)) {
      p.push(i)
    } else {
      const openBraket = p.pop() 
      console.log('openBraket', openBraket, pairs[openBraket || -1], i);
      
      if (!openBraket || pairs[openBraket] !== i) {
        return false
      }
    }
  }
  return p.length === 0
}

test('parentness', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('()[]{}')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid(']')).toBe(false);
});

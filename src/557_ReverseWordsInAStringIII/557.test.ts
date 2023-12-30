/*
Performance
Language	Time (ms)	Memory (MB)	Method
Rust	0	2.2	Pointers
Rust	3	2.3	Split
Java	4	44.3	Pointers
Java	4	44.2	Split
PHP	4	19.4	Split
C++	8	10.2	Pointers
Go	9	7	Split
Go	12	8.1	Pointers
C++	15	14.4	Split
PHP	45	23	Pointers
JavaScript	49	48.6	Split
JavaScript	70	48.9	Pointers
C#	75	45.1	Pointers
C#	75	50.3	Split
Python3	34	17.1	Split
Python3	98	17	Pointers

for JS, using of builded function is best variant for speed
*/

function reverseWordsSlow(s: string): string {
  return s
    .split(' ')
    .map(e => {
      const l = e.length;
      const word = [...e];
      for (let i = 0; i < l / 2; i++) {
        [word[i], word[l - i]] = [word[l - i], word[i]];
      }
      return word.join('');
    })
    .join(' ');
}

function reverseWords(s: string): string {
  const l = [...s];
  let start = 0;
  for (let end = 1; end < l.length; end++) {
    if (l[end] === ' ' || end === l.length - 1) {
      let e1 = l[end] === ' ' ? end - 1 : end;
      // console.log('word1', s1, e1, l.slice(s1, e1+1).join(''))
      while (start < e1) {
        [l[start], l[e1]] = [l[e1], l[start]];
        start++;
        e1--;
      }
      start = end + 1;
    }
  }

  return l.join('');
}

test('reverse III', () => {
  expect(reverseWords("Let's take LeetCode contest")).toEqual(
    "s'teL ekat edoCteeL tsetnoc"
  );
  expect(reverseWords('Mr Ding')).toEqual('rM gniD');
  expect(reverseWords('You like me')).toEqual('uoY ekil em');
});

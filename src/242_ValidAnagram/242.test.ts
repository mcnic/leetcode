function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let sLetters: {[key: string]: number} = {},
    tLetters: {[key: string]: number} = {};
  for (const i of s) {
    if (sLetters[i]) {
      sLetters[i] += 1;
    } else {
      sLetters[i] = 1;
    }
  }

  for (const i of t) {
    if (tLetters[i]) {
      tLetters[i] += 1;
    } else {
      tLetters[i] = 1;
    }
  }

  for (const e of Object.keys(sLetters)) {
    if (sLetters[e] !== tLetters[e]) return false;
  }
  return true;
}

test('anagram', () => {
  expect(isAnagram('anagram', 'nagaram')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
});

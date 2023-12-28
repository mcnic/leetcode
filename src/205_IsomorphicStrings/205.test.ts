const getMap = (s: string): Uint8Array => {
  const res = new Uint8Array(s.length);
  const symb: {[key: string]: number} = {};
  let k = 0;
  for (let i = 0; i < res.length; i++) {
    if (symb[s[i]] === undefined) {
      symb[s[i]] = k++;
    }
    res[i] = symb[s[i]];
  }
  return res;
};

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sL = getMap(s);
  const tL = getMap(t);

  //   console.log(sL, tL);
  for (let i = 0; i < sL.length; i++) {
    if (sL[i] !== tL[i]) return false;
  }

  return true;
}

test('primes', () => {
  expect(isIsomorphic('egg', 'add')).toBe(true);
  expect(isIsomorphic('foo', 'bar')).toBe(false);
  expect(isIsomorphic('paper', 'title')).toBe(true);
  expect(isIsomorphic('bbbaaaba', 'aaabbbba')).toBe(false);
});

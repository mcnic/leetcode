function makeChars(chars: string) {
  const ch: {[key: string]: number} = {};
  for (let i of chars) {
    if (ch[i]) {
      ch[i]++;
    } else {
      ch[i] = 1;
    }
  }
  return ch;
}

// use hash
function countCharactersHash(words: string[], chars: string): number {
  const dict = makeChars(chars);
  let res = 0;
  for (let word of words) {
    const copyDict: {[key: string]: number} = {...dict};
    let add = true;
    for (let i of word) {
      // console.log(i, copyDict[i])
      if (!copyDict[i] || copyDict[i] <= 0) {
        // console.log('skip', word, i)
        add = false;
        break;
      } else {
        copyDict[i]--;
      }
    }
    // console.log(word, 'copyDict', copyDict, add)
    if (add) res += word.length;
  }

  return res;
}

function countCharacters(words: string[], chars: string): number {
  return words.reduce((sum, word) => {
    const dict = chars.split('');
    let add = true;
    for (let i of word) {
      const ChIndex = dict.indexOf(i);
      // console.log(i, ChIndex, dict[ChIndex])
      if (ChIndex < 0) {
        // console.log('skip', word, i)
        add = false;
        break;
      } else {
        dict[ChIndex] = '_';
      }
    }
    // console.log(add, word, word.length)
    return add ? sum + word.length : sum;
  }, 0);
}

test('peakIndexInMountainArray', () => {
  expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toBe(6);
  expect(
    countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')
  ).toBe(10);
});

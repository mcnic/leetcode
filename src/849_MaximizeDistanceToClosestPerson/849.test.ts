function maxDistToClosestFirst(seats: number[]): number {
  const allLen = seats.length;
  let maxLen = 0;
  for (let i = 0; i < allLen; i++) {
    if (!seats[i]) {
      let j = i,
        r = 0;
      while (!seats[Math.max(0, j - r)] && !seats[Math.min(j + r, allLen)]) {
        r++;
      }
      if (r > maxLen) maxLen = r;
    }
  }

  return maxLen;
}

function maxDistToClosest(seats: number[]): number {
  const allLen = seats.length;
  let maxLen = 0,
    last = -1;
  for (let i = 0; i < allLen; i++) {
    if (seats[i]) {
      maxLen = Math.max(maxLen, Math.floor(last < 0 ? i : (i - last) / 2));
      last = i;
    }
  }

  // console.log(maxLen, allLen - last -1)
  return Math.max(maxLen, allLen - last - 1); // if 0 in last position of seats
}

test('maxDistToClosest', () => {
  expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2);
  expect(maxDistToClosest([1, 0, 0, 0])).toBe(3);
  expect(maxDistToClosest([0, 1])).toBe(1);
  expect(maxDistToClosest([1, 0, 1])).toBe(1);
  expect(maxDistToClosest([0, 1, 0])).toBe(1);
  expect(maxDistToClosest([1, 0, 0, 1])).toBe(1);
});

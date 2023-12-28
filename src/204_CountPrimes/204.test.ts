function gettPrimes(n: number): number[] {
  if (n < 2) return [];

  const nums = new Array(n);
  nums.fill(0);
  nums[0] = 1;
  nums[1] = 1;

  for (let i = 2; i < Math.sqrt(nums.length); i++) {
    if (nums[i] > 0) {
      continue;
    }
    for (let k = i * 2; k <= nums.length; k += i) {
      if (k % i === 0) {
        nums[k] = 1;
      }
    }
    // console.log('i', i, nums);
  }
  //   console.log('before', nums);
  return nums.map((e, key) => (!e ? key : 0)).filter(e => e);
}

function countPrimesSlow(n: number): number {
  const primes = gettPrimes(n);
  console.log(primes);

  return primes.length;
}

function countPrimes(n: number): number {
  if (n < 2) return 0;

  const nums = new Uint8Array(n);
  nums[0] = 1;
  nums[1] = 1;
  let s = 0;
  const maxCalcNum = nums.length;

  for (let i = 2; i < maxCalcNum; i++) {
    if (nums[i] > 0) {
      continue;
    }
    s++;
    for (let k = i * 2; k <= nums.length; k += i) {
      if (k % i === 0) {
        nums[k] = 1;
      }
    }
  }

  return s;
}

test('primes', () => {
  expect(countPrimes(100)).toBe(25);
  expect(countPrimes(10)).toBe(4);
  expect(countPrimes(0)).toBe(0);
  expect(countPrimes(4)).toBe(2);
});

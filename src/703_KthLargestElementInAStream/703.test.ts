class KthLargest {
  k: number;
  ord: number[] = [];

  constructor(k: number, nums: number[]) {
    this.k = k;
    nums.sort((l, r) => l - r);
    this.ord =
      nums.length > k ? nums.slice(nums.length - k, nums.length) : nums;
    // 'sort' & 'slice' is better ;)
    // for(let i of nums) {
    //     this.add(i)
    // }
  }

  add(val: number): number {
    if (this.ord.length < this.k + 1 || val > this.ord[0]) {
      // console.log('add', val, this.ord)
      // this.insert(val)
      let l = 0,
        r = this.ord.length - 1;
      if (val < this.ord[0]) {
        this.ord.length < this.k && this.ord.unshift(val);
      } else if (val > this.ord[this.ord.length - 1]) {
        this.ord.push(val);
        this.ord.length > this.k && this.ord.shift();
      } else {
        while (l < r) {
          const mid = (l + r) >>> 1;
          if (val > this.ord[mid]) {
            l++;
          } else {
            r--;
          }
        }
        this.ord.splice(l, 0, val);
        this.ord.length > this.k && this.ord.shift();
      }
      // console.log('full', this.ord)
      // this.ord.length > this.k && this.ord.shift()
    }
    // console.log(this.ord)
    return this.ord[0];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

test('KthLargest', () => {
  let obj = new KthLargest(3, [4, 5, 8, 2]);
  expect(obj.add(3)).toBe(4);
  expect(obj.add(5)).toBe(5);
  expect(obj.add(10)).toBe(5);
  expect(obj.add(9)).toBe(8);
  expect(obj.add(4)).toBe(8);

  obj = new KthLargest(2, [0]);
  expect(obj.add(-1)).toBe(-1);
  expect(obj.add(1)).toBe(0);
  expect(obj.add(-2)).toBe(0);
  expect(obj.add(-4)).toBe(0);
  expect(obj.add(3)).toBe(1);
});

/*
155. Min Stack
Medium
Topics
Companies
Hint
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/

class MinStack {
  min: number;
  stack: number[];

  constructor() {
    this.min = Number.MAX_SAFE_INTEGER;
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (val < this.min) {
      this.min = val;
    }
  }

  pop(): void {
    this.stack.pop();
    this.min = this.stack.reduce(
      (e, acc) => (e < acc ? e : acc),
      Number.MAX_SAFE_INTEGER
    );
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

function runTest(cmd: string[], params: number[][]) {
  let ob: MinStack | null = null;
  let res: Array<number | null> = new Array(cmd.length);

  for (let i = 0; i < cmd.length; i++) {
    // console.log(res);
    switch (cmd[i]) {
      case 'MinStack':
        ob = new MinStack();
        res[i] = null;
        break;
      case 'push':
        ob && ob.push(params[i][0]);
        res[i] = null;
        break;
      case 'pop':
        ob && ob.pop();
        res[i] = null;
        break;
      case 'top':
        ob && (res[i] = ob.top());
        break;
      case 'getMin':
        ob && (res[i] = ob.getMin());
        break;
      default:
        throw new Error('wrong command');
    }
  }
  console.log(res);

  return res;
}

test('merge', () => {
  let cmd = [
    'MinStack',
    'push',
    'push',
    'push',
    'top',
    'pop',
    'getMin',
    'pop',
    'getMin',
    'pop',
    'push',
    'top',
    'getMin',
    'push',
    'top',
    'getMin',
    'pop',
    'getMin',
  ];
  let params = [
    [],
    [2147483646],
    [2147483646],
    [2147483647],
    [],
    [],
    [],
    [],
    [],
    [],
    [2147483647],
    [],
    [],
    [-2147483648],
    [],
    [],
    [],
    [],
  ];

  expect(runTest(cmd, params)).toEqual([
    null,
    null,
    null,
    null,
    2147483647,
    null,
    2147483646,
    null,
    2147483646,
    null,
    null,
    2147483647,
    2147483647,
    null,
    -2147483648,
    -2147483648,
    null,
    2147483647,
  ]);
});

/*
 * Complete the 'getMinimumCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function getMinimumCost(arr: number[]): number {
  arr.sort()
  if(!arr.length) return 0
  
  const s = new Set([arr[0]]);
  let cnt = 1
  for (let i=1;i<arr.length;i++) {
      if(!s.has(arr[i])) {
          s.add(arr[i])
      }
      cnt += s.size
      // console.log(arr[i], s.size, cnt)
  }
  
  return cnt
}

/*
4 {
  arr: [
    2, 2, 2, 2, 2, 3,
    3, 3, 4, 5, 6, 7,
    7, 7, 7
  ]
} !== 47

0 { arr: [ 2, 2, 3 ] } = 4

1 { arr: [ 1, 2, 3, 4 ] } = 10

3 { arr: [ 1 ] } = 1

2 { arr: [ 3, 3, 3 ] } = 3


*/
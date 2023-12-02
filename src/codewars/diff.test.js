function arrayDiff(a, b) {
  const res = []
  if (!b.length) return a

  let i = 0
  while (i < a.length) {
    let isCatched = true
    for (let k = 0; k < b.length; k++) {
      //       console.log(i, k, a[i+k], b[k])
      if (a[i + k] !== b[k]) {
        isCatched = false
        //         console.log(i,k,isCatched)
        break
      }
    }
    if (isCatched) {
      //       console.log('isCatched')
      i += b.length
    } else {
      //       console.log('no isCatched')
      res.push(a[i])
      i++
    }
    console.log('isCatched', isCatched, res)
  }
  return res
}

test('array diff', () => {
  // expect(arrayDiff([1, 2], [1])).toEqual([2])
  expect(arrayDiff([0, -20, -14, 11, -3, -5, -8, -9, 13, 8, -16, -17, 7, -8, -18, -20, -7, 19, 11, -4],
    [0, -20, -14, 11, -3, -5, -8, -9, 13, 8, -16, -17, 7])).toEqual([-8, -18, -20, -7, 19, 11, -4])
})

/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    
    assert.deepEqual(arrayDiff([-5,-19,-20,14,15,19,12,18,-14,-13,-17,-12,-20,-19,-20,13,-10],
                               [-5,-19,-20,14,15,19,12,18,-14,-13]), [-17,-12,-20,-19,-20,13,-10], "3")
    
        assert.deepEqual(arrayDiff([0,-20,-14,11,-3,-5,-8,-9,13,8,-16,-17,7,-8,-18,-20,-7,19,11,-4],
                                   [0,-20,-14,11,-3,-5,-8,-9,13,8,-16,-17,7]), [-8,-18,-20,-7,19,11,-4], "4")

        assert.deepEqual(arrayDiff([-1,-20,8,-11,-12,-20,-1,0,15,-18,-17,-3,-5,-1,-5,0,-7,12],
                                   [-1,-20,8,-11,-12,-20,-1,0,15]), [-18,-17,-3,-5,-1,-5,0,-7,12], "5")
    
        assert.deepEqual(arrayDiff([-4,-5,4,8,-7,2,16,20,2,-15,16,-20,14,-10,-2,4,0],
                                   [-4,-5,4,8,-7,2,16]), [20,2,-15,16,-20,14,-10,-2,4,0], "6")
    
        assert.deepEqual(arrayDiff([-9,17,14,-11,9,-13,17,0,-11,11,-6,14],
                                   [-9,17,14,-11,9,-13,17]), [0,-11,11,-6,14], "7")
    // arrayDiff([-7,8,0,-12,1,8],[-7,8,0,-12])
    //arrayDiff([2,-4,15,-6,-6,-3,-5,15],[])
  });
});

*/
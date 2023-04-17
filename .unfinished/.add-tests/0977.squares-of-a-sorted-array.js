/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  nums = [-4, -1, 0, 3, 10]
           L            RI
  
  lSQ = 16, rSQ = 100 16 > 100? => NO
  squares = [und, und, und, und, 100]
  
  ----------------------------------------
  
  nums = [-4, -1, 0, 3, 10]
           L         RI
           
  lSQ = 16, rSQ = 9 16 > 9? => YES
  squares = [und, und, und, 16, 100]
  
  ----------------------------------------
  
  nums = [-4, -1, 0, 3, 10]
               L  I  R
           
  lSQ = 1, rSQ = 9 1 > 9? => NO
  squares = [und, und, 9, 16, 100]
  
  ----------------------------------------
  
  nums = [-4, -1, 0, 3, 10]
              LI  R
           
  lSQ = 1, rSQ = 0 1 > 0? => YES
  squares = [und, 1, 9, 16, 100]
  
  ----------------------------------------
  
  nums = [-4, -1,  0, 3, 10]
           I      LR
           
  lSQ = 0, rSQ = 0 0 > 0? => NO
  squares = [0, 1, 9, 16, 100]
*/

var sortedSquares = function (nums) {
  const squares = [];
  let left = 0, right = index = nums.length - 1;

  while (index >= 0) {
    const leftSquare = nums[left] ** 2,
      rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      squares[index] = leftSquare;
      left += 1;
    }
    else {
      squares[index] = rightSquare;
      right -= 1;
    }

    index -= 1;
  }

  return squares;
};

var sortedSquares = function (nums) {
  const squares = [];

  for (let i = right = nums.length - 1, left = 0; i >= 0; i--) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      squares[i] = leftSquare;
      left += 1;
    }
    else {
      squares[i] = rightSquare;
      right -= 1;
    }
  }

  return squares;
};

console.log(sortedSquares([100, 200, 10, 4, -2]));
console.log(sortedSquares([-200, -100, 5, 91, 99]));

// problem: Sum of n natural numbers

// i/p: n = 3
// o/p: 6

// i/p: n = 5
// o/p: 15

// ========================================================================= 1st Iteration =========================================================================

// Solution for single case n = 3, output = 6

// function sumNums(n, output, total = 0, start = 0, numsArr = []) {
//   console.log("at beginning start: ", start, "total at start: ", total);

//   if (total >= output) {
//     return { total: total, numsArr: numsArr };
//   }

//   let newStart = start + 1;
//   console.log("newStart: ", newStart);
//   if (output % newStart !== 0) {
//     console.log("start in if block: ", start);
//     newStart += 1;
//   }
//   numsArr.push(newStart);
//   total += newStart;

//   return sumNums(n, output, total, newStart, numsArr);
// }

// console.log(sumNums(3, 6));
// returns { total: 6, numsArr: [ 1, 2, 3 ] } for n = 3, output = 6
// returns { total: 16, numsArr: [ 1, 3, 5, 7 ] } - should return 15, [1, 2, 3, 4, 5]

//  ========================================================================= 2nd Iteration =========================================================================

// Generalised Solution

// function sumNums(n, total = 0, start = 0, numsArr = []) {
//   console.log("at beginning start: ", start, "total at start: ", total);

//   if (n === numsArr.length) {
//     return { total: total, numsArr: numsArr };
//   }

//   let newStart = start + 1;
//   //   console.log("newStart: ", newStart);
//   //   if (total % newStart !== 0) {
//   //     console.log("start in if block: ", start);
//   //     newStart += 1;
//   //   }
//   numsArr.push(newStart);
//   total += newStart;

//   return sumNums(n, total, newStart, numsArr);
// }

// console.log(sumNums(5));

// returns { total: 6, numsArr: [ 1, 2, 3 ] } for n = 3, output = 6
// returns { total: 16, numsArr: [ 1, 3, 5, 7 ] } - should return 15, [1, 2, 3, 4, 5]

// ========================================================================= 3rd Iteration =========================================================================

// function sumNums(n, total = 0, start = 0, numsArr = []) {
//   if (n === numsArr.length) {
//     return { total: total, numsArr: numsArr, itsAlive: true };
//   }

//   start += 1;
//   total += start;
//   numsArr.push(start);
//   let t1 = performance.now();
//   console.log("performance func2", t1);

//   return sumNums(n, total, start, numsArr);
// }

// console.log(sumNums(5));

// It's Alive!!!!!!

function sumNums(n, total = 0, start = 0, numsArr = []) {
  if (n === numsArr.length) {
    return { total: total, numsArr: numsArr, itsAlive: true };
  }

  start += 1;
  total += start;
  numsArr.push(start);
  let t1 = performance.now();
  console.log("performance func2", t1);

  return sumNums(n, total, start, numsArr);
}

console.log(sumNums(5));

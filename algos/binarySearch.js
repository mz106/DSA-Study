// 1. Sort list
// 2. first = 0, last = arr.length - 1
// 3. Select midpoint (round down) (first + last / 2)
// 4. if midpoint === target DONE
// 5. if midpoint < target first = midpoint
// 6. if midpoint > target last = midpoint
// repeat until found

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];

const binarySearch = (arr, target) => {
  console.log("before sort: ", arr);

  arr.sort();
  console.log("arr after sort: ", arr);

  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);
    let count = 0;
    console.log(
      "midpoint at start of loop: ",
      midpoint,
      "first: ",
      first,
      " ",
      "last: ",
      last
    );

    if (arr[midpoint] === target) {
      return `Target is at position ${midpoint}`;
    } else if (arr[midpoint] < target) {
      first = midpoint + 1;

      console.log("midpoint < target: ", midpoint, count);
    } else {
      last = midpoint - 1;

      console.log("midpoint > target: ", midpoint, count);
    }
  }

  return false;
};

console.log("result: ", binarySearch(numsArray, 10));

const strArr = [
  "hello",
  "dave",
  "cheese",
  "car",
  "struggle",
  "piecemeal",
  "kate",
];

// let iterativeFunction = function (arr, x) {
//   let start = 0,
//     end = arr.length - 1;

//   // Iterate while start not meets end
//   while (start <= end) {
//     // Find the mid index
//     let mid = Math.floor((start + end) / 2);

//     // If element is present at
//     // mid, return True
//     if (arr[mid] === x) return true;
//     // Else look in left or
//     // right half accordingly
//     else if (arr[mid] < x) start = mid + 1;
//     else end = mid - 1;
//   }

//   return false;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = 10;

// if (iterativeFunction(arr, x, 0, arr.length - 1)) {
//   console.log("Element found!");
// } else {
//   console.log("Element not found!");
// }

// x = 8;

// if (iterativeFunction(arr, x, 0, arr.length - 1)) {
//   console.log("Element found!");
// } else {
//   console.log("Element not found!");
// }

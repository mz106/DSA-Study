let iterativeFunction = function (arr, x) {
  let start = 0,
    end = arr.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);
    let count = 0;
    // If element is present at
    // mid, return True
    if (arr[mid] === x) return true;
    // Else look in left or
    // right half accordingly
    else if (arr[mid] < x) {
      console.log("midpoint < target: ", mid, start, "count: ", count);
      start = mid + 1;
      console.log("midpoint < target: ", mid, start);
    } else {
      console.log("midpoint > target: ", mid, start);
      end = mid - 1;
      console.log("midpoint > target: ", mid, start);
    }
  }

  return false;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 10;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
  console.log("Element found!");
} else {
  console.log("Element not found!");
}

x = 8;

if (iterativeFunction(arr, x, 0, arr.length - 1)) {
  console.log("Element found!");
} else {
  console.log("Element not found!");
}

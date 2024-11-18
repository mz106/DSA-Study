// To be an algorithim:

// 1. Must return a value
// 2. Must complete execution in a finite amount of time
// 3. Must output the same result every time for a given input set

const numsArray = [4, 3, 23, 6, 7, 1, 908, 45, 38, 2];

const linearSearch = (arr, target) => {
  const lenArr = arr.length;

  for (let i = 0; i < lenArr; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const verify = (index) => {
  if (typeof index === number && index > -1) {
    `Target is at position: ${index}`;
  } else {
    ("Target not found in list");
  }
};

console.log(`Target is at position:`, linearSearch(numsArray, 1));

console.log(`Target is at position:`, linearSearch(numsArray, 17));

console.log(`Target is at position:`, linearSearch(numsArray, 1));

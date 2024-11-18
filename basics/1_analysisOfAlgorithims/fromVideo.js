function func1(n) {
  const result = (n * (n + 1)) / 2;
  let t1 = performance.now();
  console.log("performance func1", t1);
  return result;
}

console.log(func1(5));

function func2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  let t1 = performance.now();
  console.log("performance func2", t1);
  return sum;
}

console.log(func2(5));

function func3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      sum++;
    }
  }
  let t1 = performance.now();
  console.log("performance func3", t1);
  return sum;
}

console.log(func3(5));

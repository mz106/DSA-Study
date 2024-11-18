// const myFunc1 = () => {
//   console.log("Hello func1");
// };

// myFunc1.call();

// function myFunc2() {
//   console.log("hello func2");
// }

// myFunc2.call();

// Function.prototype.myEpicFunc = function () {
//   console.log("This is my epic function!!!");
// };

// this.myEpicFunc();

// function cb(name, value) {
//   console.log("hello: ", name, " ", value);
// }

// console.log(
//   globalThis.queueMicrotask(function hello() {
//     console.log("hello");
//   })
// );

// const Foo = new Function("a", "b", "return a + b");

// const foo = new Foo();
// foo.constructor = "bar";
// foo.constructor === "bar";

// console.log(Foo(1, 2));

const arr = [1, 2, 3, 4736, 4, 920, 218, 43];

function searchArr(arr, num, count = 0) {
  if (count === arr.length) {
    return { result: false, iterations: count };
  }

  if (arr[count] === num) {
    return { result: true, iterations: count };
  }

  return searchArr(arr, num, (count += 1));
}

console.log(searchArr(arr, 10));

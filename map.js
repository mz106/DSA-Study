// Array.prototype.myMap = function (cb) {
//   const newArr = [];
//   for (let item in Array.prototype) {
//     console.log(item);
//     cb(item);
//     newArr.push(item);
//   }
//   return newArr;
// };

const thing = [1, 2, 3];

// const newThing = thing.myMap((item, index) => {
//   item += 1;
// });

// console.log(newThing);

Array.prototype.superMap = function (cb, thisArg) {
  const newArr = [];
  //   console.log("thisArg: ", thisArg);
  console.log("this: ", this);
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      const result = cb.call(thisArg, this[i], i, this);

      newArr.push(result);
    }
  }
  return newArr;
};

const objArr = [{ count: 1 }, { dave: "yes" }];

const newObjArr = objArr.superMap(function (el) {
  el.total = 10;
  return el;
});
console.log(newObjArr);
// const newThing = thing.superMap((item, index) => {
//   return item * 2;
// });

// console.log(newThing);

// const peopleArr = [
//   { name: "michael", age: 40 },
//   { name: "dave", age: 20 },
//   { name: "jane", age: 25 },
// ];

// const newPeopleArr = peopleArr.superMap(function (person, index) {
//   person.job = "dev";
//   return person;
// });

// console.log(newPeopleArr);

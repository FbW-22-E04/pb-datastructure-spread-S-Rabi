// 1:
const euroCountries = ["Germany", "Italy", "Swiss", "Spain"];
const asianCountries = ["Turkey", "Kazakhstan", "Russia", "Khurasan"];
// const mergedArray = [...euroCountries, ...asianCountries];
const bothCountries = [...euroCountries, ...asianCountries];
console.log(bothCountries);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

console.log("-------------------------------------------");
// 2:
let arr4 = ["a", "b", "c"];
let arr5 = arr4;
arr5.push("d");
console.log(arr5);

console.log("-------------------------------------------");
// 3:
const numbers = [2, 3, 5, 6, 7, 9];
console.log(Math.max(...numbers));

console.log("-------------------------------------------");
// 4:
console.log(Math.min(...numbers));

console.log("-------------------------------------------");
// 5:

const person = { name: "John" };
const job = { role: "Teacher" };
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);

const clonePerson = { ...person };
console.log(clonePerson);

const mergedObject = { ...person, ...job };
console.log(mergedObject);

job.role = "driver";
console.log(job);
console.log(mergedObject);

console.log("-------------------------------------------");
// 6:
function isWhole(a, b, c, d) {
  const total = a + b + c + d;
  const average = total / arguments.length;
  return Number.isInteger(average);
}
console.log(isWhole(...[1, 2, 3, 6]));
console.log(isWhole(...[9, 2, 2, 5]));

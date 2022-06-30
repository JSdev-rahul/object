const obj = [
  {
    id: 1,
    name: "peter",
    class: "12",
  },
  {
    id: 2,
    name: "alok",
    class: "15",
  },
  {
    id: 9,
    Teacher: "mahima",
    scholl: "webvillee",
  },
];
const obj2 = [
  {
    id: 1,
    Teacher: "xyz",
    scholl: "DCFF",
  },
  {
    id: 2,
    Teacher: "abc",
    scholl: "DFRT",
  },
  {
    id: 3,
    Teacher: "mahima",
    scholl: "webvillee",
  },
];

const newData = [];
let data = obj.filter((o1) => obj2.some((o2) => o1.id === o2.id));
console.log(data);
// const carOne = {
//   color: "blue",
//   statusd: {
// running: true,
// passengers: 4,
// wiperFluid: "empty",
//   },
//   age: 5,
//   miles: 50000,
//   value: "8000",
// };
//
// const carTwo = {
//   color: "green",
//   status: {
// running: "yes",
// passengers: 2,
// fuelTank: "empty",
//   },
//   value: 9000,
// };
//
// const combinedCar = {
//   ...carOne,
//   ...carTwo,
// };
//
// console.log(combinedCar);
//

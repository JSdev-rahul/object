// //1.find words length less than 6
// //2.when find words less than 6 character then filter the words having more than 1 "e " letter and find no. of vowels and consonant present in it

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];
// const AllData = (words) => {
//   const eData = [];
//   words
//     .filter((i) => i.length <= 10 && i.includes("e", "e"))
//     .map((item) => {
//       let vowel = item.split("").filter((e) => "aeiou".includes(e)).length;
//       let consonent = item.split("").filter((e) => !"aeiou".includes(e)).length;
//       if (!eData[item]) eData[item] = {};
//       eData[item] = { vowel, consonent };
//     });
//   console.log(eData);
// };
// AllData(words);

// function data(num) {
//   let sum = 0;
//   i = 0;
//   t = num;
//   while (t != 0) {
//     r = t % 10;
//     sum = sum + r;
//     t = t / 10;
//   }
//   return +sum.toFixed(0);
// }

// console.log(data(12));

// const str = "nayano";
// const data = str.split("").reverse().join("");
// console.log(data == str);
//
// call Method In js

// function data(name2) {
//   return "hellow" + this.name + name2;
// }

// var obj = {
//   name: "rahul",
//   class: "12",
//   Mobile: 7224077737,
// };
// console.log(data.call(obj, "alok"));

// apply Method in takes parameter in array

// function data(name2) {
//   return "hellow" + this.name + name2;
// }
// var obj = {
//   name: "rahul",
//   class: "12",
//   Mobile: 7224077737,
// };
// console.log(data.apply(obj, ["alok"]));

// bind method always return function ,whare the value of "this " keyword is bound to owner object
// var bikeDetails = {
//   displayDetails: function (registrationNumber, brandName) {
//     return (
//       this.name +
//       " , " +
//       "bike details: " +
//       registrationNumber +
//       " , " +
//       brandName
//     );
//   },
// };

// var person1 = { name: "Vivek" };

// var detailsOfPerson1 = bikeDetails.displayDetails.bind(
//   person1,
//   "TS0122",
//   "Bullet"
// );

// Binds the displayDetails function to the person1 object

// console.log(detailsOfPerson1());
// Returns Vivek, bike details: TS0452, Thunderbird

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// memoized Function in js (it store the cached value when we call gain ithis function with same parameter it return cached value )

// function MemoizedValue() {
//   const cache = {};
//   return function (num) {
//     if (num in cache) {
//       console.log("cached avlue");
//       return cache[num];
//     } else {
//       cache[num] = num + 20;
//       return cache[num];
//     }
//   };
// }
// memo = MemoizedValue();
// console.log(memo(20));
// console.log(memo(20));
// console.log(memo(20));

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Programme of infinte curring

// function one(a)
// {
// return function two(b)
// {
// if(b) return one(a+b)
// return a
// }
// }
// console.log(one(10)(20)(30)(40)())

////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

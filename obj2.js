const arr = [
  {
    name: "kunal",
    lname: "rokhle",
    Address: {
      age: 26,
      address: "indore",
      address02: {
        pincode: 452001,
        fax: 12345,
      },
    },
  },
  {
    name: "rahul",
    lname: "choudhary",
    Address: {
      age: 26,
      address: "Hatod",
      address02: {
        pincode: 452007,
        fax: 5555,
      },
    },
  },
  {
    name: "prince",
    lname: "Drivedi",
    Address: {
      age: 25,
      address: "dewas",
      address02: {
        pincode: 452007,
        fax: 5555,
      },
    },
  },
  {
    name: "alok",
    lname: "chourasiya",
    Address: {
      age: 25,
      address: "chattarpur",
      address02: {
        pincode: 452007,
        fax: 5555,
      },
    },
  },
];

///////////////////////////////////////////////////////

// Object Related Problem

//////////////////////////////////////////////////////

// problem 1 = find pincode OF rahul

// function modifiedData(data) {
//   return data
// .filter((i) => i.name == "rahul")
// .map((item) => item.Address)
// .map((item2) => item2.address02.pincode);
// }
// console.log(modifiedData(arr));

/////////////////////////////////////////////////////////

// insert Dynamic new Key and value ( MobileNumberp : 7224077737) in address02

// function modifiedData(data) {
// return data
//   .filter((i) => (i.name = "rahul"))
//   .map((i) => i.Address)
//   .map((item) => ({ ...item, MobileNumber: "7224077737" }));
//   }
//   console.log(modifiedData(arr));

/////////////////////////////////////////////////////////////

// Problem 3 = Grouping of object by Age

// function modifiedData(data) {
//   const newData = {};
//   data.map((i) => {
// if (!newData[i.Address.age]) newData[i.Address.age] = [];
// newData[i.Address.age].push(i);
//   });
//   return newData;
// }
// console.log(modifiedData(arr));

/////////////////////////////////////////////////////////////////

// infinite curriying
// function adSum(a) {
//   return (b) => {
// if (b) return adSum(a + b);
// return a;
//   };
// }
// console.log(adSum(5)(10)(15)(22)(45)(88)(100)());
/////////////////////////////////////////////////////////////////

// Problem 4=

const orders = [
  {
    orderId: "123",
    custmerId: "123",
    deliveryDate: "01-01-2020",
    deliverd: false,
    items: [
      { productId: "123", price: "55" },
      { productId: "234", price: "30" },
    ],
  },
  {
    orderId: "234",
    custmerId: "234",
    deliveryDate: "01-02-2020",
    deliverd: true,
    items: [{ productId: "234", price: "30" }],
  },
  {
    orderId: "345",
    custmerId: "234",
    deliveryDate: "05-01-2020",
    deliverd: true,
    items: [
      { productId: "567", price: "30" },
      { productId: "678", price: "80" },
    ],
  },
  {
    orderId: "456",
    custmerId: "345",
    deliveryDate: "12-01-2020",
    deliverd: true,
    items: [
      { productId: "789", price: "12" },
      { productId: "123", price: "90" },
    ],
  },
  {
    orderId: "578",
    custmerId: "456",
    deliveryDate: "12-01-2020",
    deliverd: true,
    items: [
      { productId: "901", price: "43" },
      { productId: "123", price: "55" },
    ],
  },
];
/////////////////////////////////////////////////////////////////////////////

//          Object Related Problem

////////////////////////////////////////////////////////////////////////////

// problem 1 = Grouping Of Object According To delivered Value

// function allOrders(data) {
// const newData = [];
// data.map((item) => {
// if (!newData[item.deliverd]) newData[item.deliverd] = [];
// newData[item.deliverd].push(item);
// });
// return newData;
// }
// console.log(allOrders(orders));
//
////////////////////////////////////////////////////////////////////////////

// Problem 2 = Find Only Object Whose Product ID is "123" ( inner property )

// function allOrders(data) {
//   const newData = [];
//   data.map((item) => {
//     if (item.items.find((i) => i.productId == "123")) {
//       newData.push(item);
//     }
//   });
//   return newData;
// }
// console.log(allOrders(orders));

///////////////////////////////////////////////////////////////////////////////////

//Problem  3 =. get list only custer id==234 and deliverd is false

// function dataOrder(data) {
//   return data.filter(
// (item) => item.custmerId == "234" && item.deliverd == false
//   );
// }
// console.log(dataOrder(orders));
//

//////////////////////////////////////////////////////////////////

// Problem  4 = create a new property of each oredr of total price

// function dataOrder(data) {
//   return data.map((item) => ({
//     ...item,
//     orderTotal: item.items.reduce(
//       (acc, person) => acc + JSON.parse(person.price),
//       0
//     ),
//   }));
// }
// console.log(dataOrder(orders));

/////////////////////////////////////////////////////////////////////////
// Probem 5 = check all oredr deliverd or not

// function dataOrder(data) {
//
//   return data.every((item) => item.deliverd == true);
// }
//
// console.log(dataOrder(orders));
//
//////////////////////////////////////////////////////////////////

// Problem 6 = .Grouping of Object

// result = orders.reduce(function (r, a) {
// r[a.deliverd] = r[a.deliverd] || [];
// r[a.deliverd].push(a);
// return r;
// }, Object.create(null));
// console.log("run", result);

/////////////////////////////////////////////////////////////////////

// Problem 7 = find Occurance How much True or false with count

// function allOrders(data) {
//   let newData = [];
//   return (newData = data.reduce((a, b) => {
//     a[b.deliverd] = (a[b.deliverd] || 0) + 1;
//     return a;
//   }, {}));
// }
// console.log(allOrders(orders)); // output = {  false: 1, true: 4 }

////////////////////////////////////////////////////////////////////////

// Problem 7 = Find count whose Product Id is "123"

// function allOrders(data) {
// const newData = [];
// return data.filter(
// (i) => i.items.filter((it) => it.productId == "123").length
// ).length;
// }
// console.log(allOrders(orders));
//
///////////////////////////////////////////////////////////////////////////

// Problem 8 = find only object whose product id '123' using filter method

// function allOrders(data) {
// return data.filter(
// (i) => i.items.filter((it) => it.productId == "123").length
// );
// }
// console.log(allOrders(orders));

///////////////////////////////////////////////////////////////////////////

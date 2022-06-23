const user = [
  { id: 1, fname: "rahul", lname: "choudhary" },
  { id: 2, fname: "kunal", lname: "rokhle" },
  { id: 3, fname: "dipesh", lname: "igle" },
  { id: 4, fname: "prince", lname: "kushwah" },
  { id: 5, fname: "alok", lname: "choursiya" },
  { id: 6, fname: "khushboo", lname: "patel" },
  { id: 7, fname: "Ankit", lname: "Gadewal" },
];
const comments = [
  { userId: 1, text: "Great job" },
  { userId: 2, text: "nice job" },
  { userId: 3, text: "Cool ,thanks" },
  { userId: 4, text: "nice job bro" },
  { userId: 5, text: "well done" },
];

/////////////////////////////////////////////////////////////////////

//   Object Problem

////////////////////////////////////////////////////////////////////

// problem 1 = find user through comment

// function modifieddata(user, comments) {
//   return user.filter(
// (users) =>
//   users.id == comments.find((comment) => comment.text == "nice job").userId
//   );
// const newData = comments.find((comment) => comment.text == "nice job");
// return user.filter((i) => i.id == newData.userId);
// }
// console.log(modifieddata(user, comments));
//

//////////////////////////////////////////////////////////////////////

// problem 2 = Add user fname and lname in comment Array according to theare id

// function AllOtherData(user, comments) {
//   comments.map((item) => {
//     if (user.find((i) => i.id == item.userId)) {
//       const { fname, lname } = user.find((data) => data.id == item.userId);
//       console.log({ ...item, fname, lname });
//     }
//   });
// }
// console.log(AllOtherData(user, comments));

//////////////////////////////////////////////////////////////////////

// Problem 3 = find user who have ot comments

// function AllOtherData(user, comments) {
// return user.filter((i) => comments.find((item) => item.userId == i.id));
//   }
//   console.log(AllOtherData(user, comments));
//
/////////////////////////////////////////////////////////////////////

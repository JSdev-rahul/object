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
  { id: 1, text: "Great job" },
  { id: 2, text: "nice job" },
  { id: 3, text: "Cool ,thanks" },
  { id: 4, text: "nice job bro" },
  { id: 5, text: "well done" },
];
let result = user.filter((o1) => !comments.some((o2) => o1.id === o2.id));
console.log(result);
/***************************************************** */

console.log(comments.filter((i) => i.id == user.find((el) => el.id == "2").id));
console.log(user.find((el) => el.id == "2").id);

/***************************************************** */
// user.filter(
//     (users) =>
//         users.id == comments.find((comment) => comment.text == "nice job").userId
// );
/*******************************************/

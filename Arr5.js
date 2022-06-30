const studentData = [
  {
    fname: "peter",
    lname: "johns",
    strengths: ["music", "Art"],
    exams: [
      {
        Maths: 90,
        Science: 50,
        Physics: 45,
        Chemistry: 88,
        English: 66,
      },
    ],
  },
  {
    fname: "annika",
    lname: "singh",
    strengths: ["coking", "Art"],
    exams: [
      {
        Maths: 45,
        Science: 50,
        Physics: 89,
        Chemistry: 74,
        English: 56,
      },
    ],
  },
  {
    fname: "Deo",
    lname: "innas",
    strengths: ["cricket", "badminton"],
    exams: [
      {
        Maths: 55,
        Science: 8,
        Physics: 1,
        Chemistry: 9,
        English: 69,
      },
    ],
  },
];

// const data = studentData.map((item) => ({
//   ...item.exams,
//   Total: item.exams.map((e) =>
// Object.values(e).reduce((prev, curr) => prev + curr, 0)
//   ),
// }));
// console.log(data);
//
// /******************************************************************************** */
studentData.forEach((el) => {
  const ex = el.exams[0];
  const Total = Object.values(ex).reduce((prev, curr) => prev + curr);
  ex.Total = Total;
  const per = (Total / 500) * 100;
  per >= 33 ? (ex.result = "pass") : (ex.result = "fail");
});
console.log(studentData);
//
/******************************************************************************* */
const obj = [];
studentData.map((el) => {
  el.exams.map((item) => {
    if (!obj[item.result]) obj[item.result] = [];
    obj[item.result].push(el);
  });
});
console.log(obj);
//
/******************************************************************************* */

// const finaldata = studentData.filter((value, index, array) => {
// var total;
// Object.values(value.exams[0]).reduce(
//   (marks, nextmarks) => (total = marks + nextmarks)
// );
// value.exams[0].total = total;
//   });
//
//   console.log(studentData);
//

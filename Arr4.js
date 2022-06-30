let arr = [
  {
    fname: "Steven",
    lname: "Hancock",
    score: 90,
  },
  {
    fname: "peter",
    lname: "show",
    score: 71,
  },
  {
    fname: "Annika",
    lname: "sharma",
    score: 82,
  },
  {
    fname: "andrew",
    lname: "rascal",
    score: 50,
  },
];

console.log(arr.sort((a, b) => b.score - a.score));

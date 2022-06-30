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
  {
    id: 1,
    text: {
      facebook: "",
      twitter: "hello",
      instagram: ["hello1", "hello2", "hello3"],
    },
  },
  { id: 2, text: "nice job" },
  { id: 3, text: "Cool ,thanks" },
  { id: 4, text: "nice job bro" },
  { id: 5, text: "well done" },
];
const data = [];
user.map((item) => {
  comments.map((i) => {
    if (item.id == i.id) {
      if (typeof i.text == "object") {
        console.log(typeof i.text);
        data.push({ ...item, allComments: [i.text] });
        return;
      }
      data.push({ ...item, ...i });
    }
  });
});
console.log(data);

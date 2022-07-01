const arr = [1, 2, 3, 4, { a: 77, b: 55 }];
// const copyArr = arr.slice(0);
// const copyArr =arr.Array.from(arr)
// const copyArr =[...arr]
// [...]  , Array.from  , slice(0) only uper level ki deep copy banate hai 
// nested ki deep copy create

// Deep copy  using json.parse(json.stringFy()) // nested la bhi dusra refrence crete kar deta hai 

const copyArr = JSON.parse(JSON.stringify(arr))

copyArr[1] = 5;
copyArr[4]['a'] = 100
console.log("original arry", arr);
console.log("copyArr arry", copyArr);

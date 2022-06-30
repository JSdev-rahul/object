const obj = [
    {
        id: 1,
        name: "peter",
    },
    {
        id: 2,
        name: "karlo",
    },
    {
        id: 3,
        name: "peter",
    },
    {
        id: 4,
        name: "addison",
    },
    {
        id: 5,
        name: "jafar",
    },
]
const data= [...new Map(obj.map((item)=>[item['name'],item])).values()]
// console.log(data)
const data2=obj.map((item)=>[item['name'],item])
const data3=[...new Map(data2)]
console.log(data3)

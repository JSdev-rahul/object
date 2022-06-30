let str = 'hello thisx is javascriptx'
const arr = str.split(' ')

const data=arr.map((x) => {
    return x.includes("x") ? x = "w" : x
     
})
console.log(data.join(' '))
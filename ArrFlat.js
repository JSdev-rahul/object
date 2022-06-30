
// Flat array using Method and Without Method

const arr = [1, 2, [4, 5, [6, 7]]]

console.log(arr.flat(Infinity))

const data = []
function getData(arr) {
    arr.forEach(ar => Array.isArray(ar) ? getData(ar) : data.push(ar))
}
getData(arr)
console.log(data)


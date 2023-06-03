function lastIndexOf(arr, val) {
 return arr.lastIndexOf(val)
}

console.log(lastIndex([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndex([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndex([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndex([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndex([], 3), "=?", -1);

const sumLargestNumbers = function (data) {
  // Put your solution here
  const firstNum = Math.max(...data)
  data.splice(data.indexOf(firstNum), 1)
  const secondNum = Math.max(...data)
  return firstNum + secondNum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

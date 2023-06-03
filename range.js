const range = function(start, end, step){
  if(start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return []
  } else {
    let rangeArray = []
    for(let i = start; i <= end; i = i + step){
      rangeArray.push(i)
    } 
    return rangeArray  
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
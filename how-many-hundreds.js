const howManyHundreds = function(num){
  let remainder = num % 100
  let hundies
  if(remainder === 0){
    hundies = num / 100
  } else {
    hundies = (num - remainder) / 100
  }
  return hundies
}

console.log(howManyHundreds(1000))
console.log(howManyHundreds(894))
console.log(howManyHundreds(520))
console.log(howManyHundreds(99))
console.log(howManyHundreds(0))
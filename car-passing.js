function carPassing(arr, val){
  const obj = {
    time: Date.now(),
    speed: val
  }

  arr.push(obj)
  return arr
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]
const speed = 38

console.log(carPassing(cars, speed))
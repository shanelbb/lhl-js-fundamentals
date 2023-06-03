const judgeVegetable = (arr, val) => {
  const valueArray = []
  arr.forEach(arrItem => {
    valueArray.push(arrItem[val])
  })  
  const highScore = Math.max(...valueArray)
  for(let i = 0; i < arr.length; i++){
    if(arr[i][val] === highScore){
      return arr[i].submitter
    }
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))

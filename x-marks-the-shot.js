function finalPosition(arr){
  let pos = [0, 0]
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'west'){
      pos[0] = pos[0] - 1
    } else if (arr[i] === 'east'){
      pos[0] = pos[0] + 1
    } else if (arr[i] === 'south'){
      pos[1] = pos[1] - 1
    } else if (arr[i] === 'north'){
      pos[1] = pos[1] + 1
    }
  }
  return pos
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
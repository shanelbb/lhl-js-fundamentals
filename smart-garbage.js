const smartGarbage = (trash, bins) => {
  for(let prop in bins){
    if(trash === prop){
      bins[prop] = bins[prop] + 1
    }
  }
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))
console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }))
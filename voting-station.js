function chooseStations(arr) {
  let goodStations = []
  arr.forEach(item => {
    if(item[1] >= 20 && (item[2] === 'school' || item[2] === 'community centre')){
      goodStations.push(item[0])
    }
  })
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations)
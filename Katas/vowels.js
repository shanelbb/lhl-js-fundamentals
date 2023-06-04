const numberOfVowels = function (data) {
  // Put your solution here
  const vowels = 'aeiou'
  const letters = data.split('')
  let count = 0
  letters.forEach(letter => {
    if (vowels.includes(letter)) {
      count++
    }
  })
  return count
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

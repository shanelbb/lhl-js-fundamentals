const urlEncode = function (text) {
  // Put your solution here
  const trimmed = text.trim()
  const strArr = trimmed.split(' ');
  const encoded = strArr.join('%20')
  return encoded
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

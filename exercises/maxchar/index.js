// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};

  for (let char of str) {
    if (!count[char]) {
      count[char] = 1;
      
    } else {
      count[char]++;
    }
  }
  
  return Object.keys(count).reduce((a, b) => {
    return count[a] > count[b] ? a : b
  })
}

module.exports = maxChar;

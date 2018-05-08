// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //split up the int
  //check for trailing zeros => parseInt will innately do this
  //check for negative negative sign
  //return the reversed int, must be int

  let reversed = [];
  let strInt = n.toString()
                .split('');

  if (Math.sign(n) === -1) {
    for (let i = strInt.length - 1; i > 0; i--) {
      reversed.push(strInt[i]);
    }
    return - (parseInt(reversed.join('')));
  }

  
  for (let i = strInt.length - 1; i >= 0; i--) {
    reversed.push(strInt[i]);
  }
  return (parseInt(reversed.join('')));
}

module.exports = reverseInt;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// reverse = (str) => {
//   let newStr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr.push(str[i]);
//   }
//   let reversed = newStr.join('');
//   return reversed;
// }


// Optimal soln:
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
  }

  module.exports = reverse;
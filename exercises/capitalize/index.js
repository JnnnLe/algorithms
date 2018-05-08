// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  const capWords = [];

  let strArray = str.split(' ');

  strArray.forEach((word, i) => {
    let upperLetter = strArray[i][0].toUpperCase() + word.slice(1)
    capWords.push(upperLetter)

  })

  return capWords.join(' ');
}


// function capitalize(str) {
  
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       resuit += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }


// function capitalize(str) {

//   const capWords = [];

//   for (let word of str.split(' ')) {
//     capWords.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return capWords.join(' ');
// }

module.exports = capitalize;

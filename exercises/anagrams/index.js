// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// //helper fn
// function buildChar(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   // disreguard spaces, capitol letters, and symbols
//   // word.replace(/['\w], '')
//   const aChar = buildChar(stringA);
//   const bChar = buildChar(stringB);

//   if (Object.keys(aChar).length !== Object.keys(bChar).length) {
//     return false;
//   } 

//   for (let char in aChar) {
//     if (aChar[char] !== bChar[char]) {
//       return false;
//     }
//   }

//   return true;
// }

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase()
                                  .split('')
                                  .sort()
                                  .join('')
}

function anagrams(strA, strB) {
  return cleanString(strA) ===cleanString(strB);
}


 
module.exports = anagrams;

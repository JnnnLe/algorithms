// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//iterative soln: 
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {

      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }

    }
    console.log(stair);
  }
}

// //recursion soln:
// function steps(n, row = 0, stair = '') {
//   //base case:
//   if (n === row) {
//     return;
//   }

//   //continue to end of a row
//   if (n === stair.length) {
//     console.log(stair);
//     //rescursive step:
//     return steps(n, row + 1);
//   }
  
//   //first hit case
//   if (stair.length <= row) {
//     stair += '#';
//   } else {
//     stair += ' ';
//   }
//   steps(n, row, stair);
// }

module.exports = steps;

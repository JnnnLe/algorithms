// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {

  //use BFT for a node in this problem
  let counters = [0];

  const queue = [root, 'stop'];

  while (queue.length > 1) {
    const node = queue.shift();

    if (node === 'stop') {
      counters.push(0);
      queue.push('stop');
    } else {
      queue.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
  console.log(counters)
}

module.exports = levelWidth;
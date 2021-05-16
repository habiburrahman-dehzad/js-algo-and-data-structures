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
  let queue = [root, 's'];
  let counters = [0];

  while (queue.length > 1) {
    const node = queue.shift();
    if (node === 's') {
      queue.push('s');
      counters.push(0);
    } else {
      queue.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;

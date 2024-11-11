/**
 * Please implement this method to traverse the tree 
 * and return the sum of the values of all nodes
 * at the level n in the tree. 
 * Node root is assumed to be at the level 0. All its children are level 1, etc.
 * 
 * The tree is defined as a structure of nodes that have a number value and 0-n children nodes.
 *
 * The tree has following structure:
 
var tree = {
  value: 1,
  children: [
    {
      value: 2, 
      children: []
    },
    {
      value: 5, 
      children: [
        {
          value: 1, 
          children: []
        }
      ]
    }
  ]
};
 
 * Example: For the tree above the function should return:
 * countLevelSum(tree, 0) -> 1
 * countLevelSum(tree, 1) -> 7
 * countLevelSum(tree, 2) -> 1
 */
function countLevelSum(tree, n) {
  if (!tree) return 0;

  let queue = [tree];
  let level = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelSum = 0;

    // When we reach the desired level, sum the node values
    if (level === n) {
      for (let i = 0; i < levelSize; i++) {
        levelSum += queue[i].value;
      }
      return levelSum;
    }

    // Process nodes for the next level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      queue.push(...node.children); // Add all children to the queue
    }

    level++;
  }

  // If the level doesn't exist in the tree, return 0
  return 0;
}

var tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [],
    },
    {
      value: 5,
      children: [
        {
          value: 1,
          children: [],
        },
      ],
    },
    {
      value: 7,
      children: [
        {
          value: 1,
          children: [],
        },
      ],
    },
  ],
};

console.log(countLevelSum(tree, 1));

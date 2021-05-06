class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value is less than node's value go left
      if (value < node.value) {
        // if there is no left child append the new node
        if (!node.left) {
          node.left = newNode;
        }
        // if there is a left child we call this function again recursively
        else {
          searchTree(node.left);
        }
      }
      // if value is greater than node's value go right
      else if (value > node.value) {
        // if there is no right child append the new node
        if (!node.right) {
          node.right = newNode;
        }
        // if there is a right child we call this function again recursively
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // continue traversing left until there is no more nodes
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    // continue traversing right until there is no more nodes
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currnetNode = this.root;

    while (currnetNode) {
      if (value === currnetNode.value) {
        return true;
      }

      // if the value is less than the current node's value we go left
      if (value < currnetNode.value) {
        currnetNode = currnetNode.left;
      } else {
        currnetNode = currnetNode.right;
      }
    }

    return false;
  }

  // Depth first search - branch by branch

  // In-order search
  depthFirstSearchInOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exist go to left again
      if (node.left) traverse(node.left);

      // grab the root node's value
      result.push(node.value);

      // if right child exits go to the right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // Pre-order search
  // root, left, right
  depthFirstSearchPreOrder() {
    let result = [];

    const traverse = (node) => {
      // grab the root node's value
      result.push(node.value);

      // if left child exist go to left again
      if (node.left) traverse(node.left);

      // if right child exits go to the right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  // Post-order search
  // left, right, root
  depthFirstSearchPostOrder() {
    let result = [];

    const traverse = (node) => {
      // if left child exist go to left again
      if (node.left) traverse(node.left);

      // if right child exits go to the right again
      if (node.right) traverse(node.right);

      // grab the root node's value
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }

  // Breadth first search - level by level
  breadthFirstSearch() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

module.exports = {
  Node,
  BinarySearchTree,
};

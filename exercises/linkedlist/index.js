// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   *
   * @param {any} data
   */
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  /**
   * @returns {Number}
   */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    let node = new Node(data);
    if (!last) {
      this.head = node;
    } else {
      last.next = node;
    }
  }

  getAt(index) {
    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index) {
        return node;
      }

      node = node.next;
      i++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let previous = this.getAt(index - 1);
      if (previous && previous.next) {
        previous.next = previous.next.next;
      }
    }
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      let previous = this.getAt(index - 1);
      if (previous) {
        previous.next = new Node(data, previous.next);
      } else {
        this.insertLast(data);
      }
    }
  }

  forEach(fn) {
    let index = 0;
    let node = this.head;
    while (node) {
      fn(node, index);

      index++;
      node = node.next;
    }
  }

  // [Symbol.iterator]() {
  //   let node = this.head;

  //   return {
  //     next: () => {
  //       let current = node;
  //       node = node ? node.next : null;
  //       return { value: current, done: current === null };
  //     },
  //   };
  // }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;

      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

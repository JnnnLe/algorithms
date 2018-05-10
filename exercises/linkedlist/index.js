// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //value + next;
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;

    while (this.head) {
      counter++;
      this.head = this.head.next;
    }
    
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!this.head) { 
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // let node = this.head;

    if (!this.head) {
      return; 
    }

    this.head = this.head.next;
  }


}


module.exports = { Node, LinkedList };

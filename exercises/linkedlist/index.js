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

}

module.exports = { Node, LinkedList };

// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor (data, next) {
    this.data = data;
    this.next = next || null
  }
}

class LinkedList {

  constructor () {
    this.head = null;
  }

  insertFirst (data) {
    //create new head
    //if head already exists, new head's next will be prev head
    this.head = new Node(data, this.head);
  }

  size () {
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

    while (node) {
      if (node.next === null) {
        return node;
      }

      //other wise update to the next node run the check again
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
      
    while (node.next) {
    
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }



  //ends LinkedList  
}

module.exports = { Node, LinkedList };
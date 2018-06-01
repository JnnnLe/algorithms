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
    
  }



  //ends LinkedList  
}

module.exports = { Node, LinkedList };
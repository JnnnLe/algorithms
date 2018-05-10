// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stackA = new Stack();

    //essentially a hold for reorder
    this.stackB = new Stack();
  }

  add(data) {
    this.stackA.push(data);
  }

  remove() { 
    // return this.stackB.push(this.stackA.shift());

    while (this.stackA.peek()) {
      const data = this.stackA.pop();
      this.stackB.push(data);
    }

    const record = this.stackB.pop();

    while (this.stackB.peek()) {
      stackA.push(this.stackB.pop());
    }

    return record;
  }

  peek() {
    // return this.stackB.push(this.stackA.shift());

    while (this.stackA.peek()) {
      const data = this.stackA.pop();
      this.stackB.push(data);
    }

    const record = this.stackB.peek();

    while (this.stackB.peek()) {
      stackA.push(this.stackB.pop());
    }

    return record;
  }

}

module.exports = Queue;

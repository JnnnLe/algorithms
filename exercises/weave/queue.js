// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.storage = [];
  }

  add(data) {
    this.storage.unshift(data);
  }

  remove() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }
}

module.exports = Queue;

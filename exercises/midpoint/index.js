// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  
  // will move over 1 node at a time
  let slow = list.getFirst();

  // will move over 2 nodes at a time
  let fast = list.getFirst();
  
    // if the next two nodes exists
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
    
  // once 'fast' condiditon is broken, the midpoint is found
  return slow;
}

module.exports = midpoint;

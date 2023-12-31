// Linked List

// L1 -> L2 -> L3 -> L4 -> L5 -> L6 -> L7

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  // Add or Append a new node to the end of the linked list
  // Make the new node a head of the linked list
  // helper function that shows the linked list in console

  append(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;// this assumes the Linked List is empty// assign the new node as the head of the link
    } else {

      // put your codes here
      // write the logic if LL is not empty
    let lastNode = this.head;//find the last node and append the new node at the end !
    while (lastNode.next !== null) { // Inside the loop, update lastNode to be the next node in the list until we reach the last node.
      lastNode = lastNode.next; 
    }
    lastNode.next = newNode; //Once we find the last node, assign the next property of the last node to the new node:
      
    }
  }
}
// what is the Big-O notation?
//0(n)
let n1 = new Node({ location: "Earth", distanceToFinalpoint: 3000 });
let n2 = new Node({ location: "Venus", distanceToFinalpoint: 2000 });
let n3 = new Node({ location: "Mercury", distanceToFinalpoint: 1500 });
let n4 = new Node({ location: "Sun", distanceToFinalpoint: 0 });

let l1 = new LinkedList();
l1.append(n1);
l1.append(n2);
l1.append(n3);
l1.append(n4);
console.log(l1)
[1, 2, 4, 5].push(6);

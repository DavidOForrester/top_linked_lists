class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();
linkedList.append("testing");
linkedList.append("testing a second one");

linkedList.print();

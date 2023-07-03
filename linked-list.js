class Node {
  constructor(value) {
    this.value = value;
  }
}

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

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head
    this.head = newNode
  }

  size() {
    console.log(this.length);
  }

  headNode() {
    let node = this.head;
    console.log(node.value);
  }

  tailNode() {
    let node = this.tail;
    console.log(node.value);
  }

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {
    let output = "";
    let node = this.head;
    while (node) {
      output = output + "(" + node.value + ") -> ";
      node = node.next;
    }
    output = output + "null";
    console.log(output);
  }
}

const linkedList = new LinkedList();
linkedList.append("testing");
linkedList.append("testing a second one");
linkedList.append("testing a third");
linkedList.prepend("this one should be on the front");

linkedList.toString();

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
    newNode.next = this.head;
    this.head = newNode;
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

  at(index) {
    let node = this.head;
    let i = 0;
    while (node) {
      if (index == i) {
        return node.value;
      }
      i++;
      node = node.next;
    }
  }

  pop() {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let node = this.head;
      while (node.next !== this.tail) {
        node = node.next;
      }
      node.next = null;
      this.tail = node;
    }
    this.length--;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  find(value) {
    let node = this.head;
    let i = 0;
    while (node) {
      if ((node.value === value)) {
        return i;
      }
      i++;
      node = node.next;
    }
  }

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
console.log(linkedList.find("testing"));

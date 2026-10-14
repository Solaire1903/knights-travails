class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class MoveTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

export default MoveTree;

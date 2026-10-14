import arraysAreEqual from "./compare-arrays.js";

/**
 * Represents a node in the move tree
 */
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

/**
 * Represents a tree with all possible knight paths from the
 * start coordinate to the end coordinate on a 8x8 chess field
 */
class MoveTree {
  constructor(start, end) {
    this.root = new Node(start);
    this.end = end;
    this.presentCoordinates = [start];

    this.#buildTree(this.root);
  }

  /**
   * Generates all possible next knight moves from the given coordinates
   * @param {Array<Number>} coordinates The coordinates to generate the moves from
   * @returns The array of all possible next moves
   */
  #generateNextMoves(coordinates) {
    const nextMoves = [];

    for (let x = -2; x < 3; x++) {
      //Skip to next iteration when x is 0
      if (x === 0) x++;

      const nextX = coordinates[0] + x;
      let firstNextY, secondNextY;

      //Generate y coordinates
      if (x === -2 || x === 2) {
        firstNextY = coordinates[1] + 1;
        secondNextY = coordinates[1] - 1;
      } else if (x === -1 || x === 1) {
        firstNextY = coordinates[1] + 2;
        secondNextY = coordinates[1] - 2;
      }

      //Check for bounds
      if (nextX >= 0 && nextX <= 7) {
        if (firstNextY >= 0 && firstNextY <= 7)
          nextMoves.push([nextX, firstNextY]);
        if (secondNextY >= 0 && secondNextY <= 7)
          nextMoves.push([nextX, secondNextY]);
      }
    }

    return nextMoves;
  }

  /**
   * Generates all child nodes for a given node's coordinates
   * @param {Array<Number>} coordinates The coordinates to generate the child nodes from
   * @returns The array of child nodes
   */
  #generateChildNodes(coordinates) {
    const children = [];
    const nextMoves = this.#generateNextMoves(coordinates);

    //Only generate node when it has not yet been generated in the tree (exception is the end node)
    nextMoves.forEach((coordinate) => {
      const presentCoordinatesAsString = JSON.stringify(
        this.presentCoordinates,
      );
      const coordinateAsString = JSON.stringify(coordinate);

      if (presentCoordinatesAsString.indexOf(coordinateAsString) === -1) {
        if (!arraysAreEqual(coordinate, this.end))
          this.presentCoordinates.push(coordinate);
        children.push(new Node(coordinate));
      }
    });

    return children;
  }

  /**
   * Builds the move tree from the given root node
   * @param {Node} root The root node to build the tree from
   */
  #buildTree(root) {
    const queue = [root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      //Do not generate child nodes for nodes with end value
      if (!arraysAreEqual(currentNode.value, this.end)) {
        currentNode.children = this.#generateChildNodes(currentNode.value);

        currentNode.children.forEach((node) => {
          queue.push(node);
        });
      }
    }
  }
}

export default MoveTree;

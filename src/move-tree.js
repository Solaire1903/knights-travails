class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class MoveTree {
  constructor(start) {
    this.root = new Node(start);
  }

  generateNextMoves(coordinates) {
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
}

export default MoveTree;

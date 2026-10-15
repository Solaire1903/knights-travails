import MoveTree from "./move-tree.js";

const knightMoves = (start, end) => {
  const moveTree = new MoveTree(start, end);
  const path = moveTree.findPath(moveTree.end);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:\n`);
  path.forEach((move) => {
    console.log(move);
  });
};

export default knightMoves;

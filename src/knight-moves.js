import MoveTree from "./move-tree.js";

/**
 * Logs the shortest path from one coordinate to another, based
 * on how a knight in chess moves
 * @param {Array<Number>} start The start coordinate
 * @param {Array<Number>} end The end coordinate to reach
 */
const knightMoves = (start, end) => {
  const moveTree = new MoveTree(start, end);
  const path = moveTree.findPath(moveTree.end);

  console.log(`You made it in ${path.length - 1} moves! Here's your path:\n`);
  path.forEach((move) => {
    console.log(move);
  });
};

export default knightMoves;

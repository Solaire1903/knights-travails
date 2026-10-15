import MoveTree from "./move-tree.js";

const moveTree = new MoveTree([0, 0], [7, 7]);

console.log(moveTree.findPath(moveTree.end));

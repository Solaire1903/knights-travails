import MoveTree from "./move-tree.js";

const moveTree = new MoveTree([0, 0], [3, 3]);

moveTree.root.children.forEach((node) => {
  const currentChildren = node.children;
  currentChildren.forEach((node) => {
    console.log(node.value);
  });
});

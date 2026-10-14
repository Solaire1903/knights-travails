import MoveTree from "../move-tree.js";

describe("Initialize Tree", () => {
  const moveTree = new MoveTree([0, 0]);

  test("Root is correct", () => {
    expect(moveTree.root.value).toEqual([0, 0]);
  });

  test("Direct children are correct", () => {
    expect(moveTree.root.children).toEqual([1, 2], [2, 1]);
  });
});

import MoveTree from "../move-tree.js";

describe("Initialize Tree", () => {
  test("Root is correct", () => {
    const moveTree = new MoveTree([3, 2]);
    expect(moveTree.root.value).toEqual([3, 2]);
  });
});

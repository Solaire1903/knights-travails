import MoveTree from "../move-tree.js";

describe("Initialize Tree", () => {
  const moveTree = new MoveTree([0, 0], [3, 3]);

  test("Root is correct", () => {
    expect(moveTree.root.value).toEqual([0, 0]);
  });

  test("Direct children are correct", () => {
    expect(moveTree.root.children[0].value).toEqual([1, 2]);
    expect(moveTree.root.children[1].value).toEqual([2, 1]);
  });
});

const { Node, BinarySearchTree } = require('./index');

test('should be a function', () => {
  expect(typeof Node).toEqual('function');
});

test('should be a function', () => {
  expect(typeof BinarySearchTree).toEqual('function');
});

describe('methods', () => {
  /*
                15
              /    \
             3      36
           /  \    /  \
          2    12 28   39
    */
  const bst = new BinarySearchTree(15);

  beforeEach(() => {
    bst.insert(3);
    bst.insert(36);
    bst.insert(2);
    bst.insert(12);
    bst.insert(28);
    bst.insert(39);
  });

  test('should return the correct size', () => {
    expect(bst.size()).toEqual(7);
  });

  test('should return the min', () => {
    expect(bst.min()).toEqual(2);
  });

  test('should return the max', () => {
    expect(bst.max()).toEqual(39);
  });

  test('should return true if contains', () => {
    expect(bst.contains(2)).toEqual(true);
  });

  test('should return false if not contains', () => {
    expect(bst.contains(9)).toEqual(false);
  });

  describe('search methods', () => {
    test('should return ordered numbers for dfs in order', () => {
      expect(bst.depthFirstSearchInOrder()).toMatchObject([
        2,
        3,
        12,
        15,
        28,
        36,
        39,
      ]);
    });

    test('should return pre-ordered numbers for dfs pre-order', () => {
      expect(bst.depthFirstSearchPreOrder()).toMatchObject([
        15,
        3,
        2,
        12,
        36,
        28,
        39,
      ]);
    });

    test('should return post ordered number for dfs post-order', () => {
      expect(bst.depthFirstSearchPostOrder()).toMatchObject([
        2,
        12,
        3,
        28,
        39,
        36,
        15,
      ]);
    });

    test('should return level by level result for breadth firs search', () => {
      expect(bst.breadthFirstSearch()).toMatchObject([
        15,
        3,
        36,
        2,
        12,
        28,
        39,
      ]);
    });
  });
});

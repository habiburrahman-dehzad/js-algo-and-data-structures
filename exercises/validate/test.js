const Node = require('./node');
const validate = require('./index');

test('Validate recognizes a valid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);

  expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.left.left.right = new Node(999);

  expect(validate(n)).toEqual(false);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(0);
  n.insert(12);
  n.insert(-1);
  n.insert(4);
  n.insert(11);
  n.insert(20);
  n.insert(17);
  n.insert(99);
  n.left.left.right = new Node(15);

  expect(validate(n)).toEqual(false);
});

test('Validate recognizes an invalid BST', () => {
  const n = new Node(10);
  n.insert(0);
  n.insert(12);
  n.insert(-1);
  n.insert(4);
  n.insert(11);
  n.insert(20);
  n.insert(17);
  n.insert(99);
  n.right.right.left = new Node(9);

  expect(validate(n)).toEqual(false);
});

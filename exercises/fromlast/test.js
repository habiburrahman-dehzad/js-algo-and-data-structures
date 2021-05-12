const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast must not throw error when list is empty', () => {
  const l = new List();

  expect(() => fromLast(l, 3)).not.toThrow();
});

test('fromLast returns the node n elements from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});

test('fromLast returns the first node when we pass a number equal to size - 1', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');
  l.insertLast('f');
  l.insertLast('g');
  l.insertLast('h');

  expect(fromLast(l, 7).data).toEqual('a');
});

test('fromLast returns the first node when we go beyond the first element from the end', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');
  l.insertLast('f');
  l.insertLast('g');
  l.insertLast('h');

  expect(fromLast(l, 8).data).toEqual('a');
});

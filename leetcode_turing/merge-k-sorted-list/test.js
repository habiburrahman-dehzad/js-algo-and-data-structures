const { mergeKLists, ListNode } = require('./index');

test('should be a function', () => {
  expect(typeof mergeKLists).toEqual('function');
});

test('should return the correct result', () => {
  const result = mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ]);

  expect(result).toEqual(
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(4, new ListNode(4, new ListNode(5, new ListNode(6))))
          )
        )
      )
    )
  );
});

test('should return the correct result', () => {
  const result = mergeKLists([]);

  expect(result).toEqual(null);
});

test('should return the correct result', () => {
  const result = mergeKLists([
    new ListNode(undefined, new ListNode(undefined, new ListNode(undefined))),
  ]);

  expect(result).toEqual(null);
});

test('should return the correct result', () => {
  const result = mergeKLists([
    new ListNode(undefined, new ListNode(4, new ListNode(undefined))),
  ]);

  expect(result).toEqual(new ListNode(4));
});

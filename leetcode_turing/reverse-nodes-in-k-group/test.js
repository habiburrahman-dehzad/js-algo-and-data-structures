const { reverseKGroup, ListNode } = require('./index');

test('should be a function', () => {
  expect(typeof reverseKGroup).toEqual('function');
});

test('should return the correct result', () => {
  const result = reverseKGroup(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    2
  );

  expect(result).toEqual(
    new ListNode(
      2,
      new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))
    )
  );
});

test('should return the correct result', () => {
  const result = reverseKGroup(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    3
  );

  expect(result).toEqual(
    new ListNode(
      3,
      new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))
    )
  );
});

test('should return the correct result', () => {
  const result = reverseKGroup(new ListNode(1), 1);

  expect(result).toEqual(new ListNode(1));
});

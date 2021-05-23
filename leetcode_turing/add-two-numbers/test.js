const { addTwoNumbers, ListNode } = require('./index');

test('should be a function', () => {
  expect(typeof addTwoNumbers).toEqual('function');
});

test('should return the correct result', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  const result = addTwoNumbers(l1, l2);

  expect(result.val).toEqual(7);
  expect(result.next.val).toEqual(0);
  expect(result.next.next.val).toEqual(8);
});

test('should return the correct result', () => {
  const l1 = new ListNode(
    9,
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    )
  );

  const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

  const result = addTwoNumbers(l1, l2);

  expect(result.val).toEqual(8);
  expect(result.next.val).toEqual(9);
  expect(result.next.next.val).toEqual(9);
  expect(result.next.next.next.val).toEqual(9);
  expect(result.next.next.next.next.val).toEqual(0);
  expect(result.next.next.next.next.next.val).toEqual(0);
  expect(result.next.next.next.next.next.next.val).toEqual(0);
  expect(result.next.next.next.next.next.next.next.val).toEqual(1);
});

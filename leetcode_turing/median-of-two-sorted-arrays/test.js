const findMedianSortedArrays = require('./index');

test('should be a function', () => {
  expect(typeof findMedianSortedArrays).toEqual('function');
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([1, 2], [3]);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([1, 2], [3, 4]);
  expect(result).toEqual(2.5);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([0, 0], [0, 0]);
  expect(result).toEqual(0);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([], [1]);
  expect(result).toEqual(1);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([2], []);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays([2, 2, 2, 2, 2, 2, 2, 2, 2, 2], []);
  expect(result).toEqual(2);
});

test('should return the correct result', () => {
  const result = findMedianSortedArrays(
    [0, 1, 2, 4, 5, 7, 23, 234, 435, 9000],
    [0, 1, 193, 231, 7655, 9876]
  );
  expect(result).toEqual(15);
});

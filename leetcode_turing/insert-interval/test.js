const insert = require('./index');

test('should be a function', () => {
  expect(typeof insert).toEqual('function');
});

test('should return the correct result', () => {
  const result = insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  );
  expect(result).toEqual([
    [1, 5],
    [6, 9],
  ]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  );
  expect(result).toEqual([
    [1, 2],
    [3, 10],
    [12, 16],
  ]);
});

test('should return the correct result', () => {
  const result = insert([], [5, 7]);
  expect(result).toEqual([[5, 7]]);
});

test('should return the correct result', () => {
  const result = insert([[1, 5]], [2, 3]);
  expect(result).toEqual([[1, 5]]);
});

test('should return the correct result', () => {
  const result = insert([[1, 5]], [2, 7]);
  expect(result).toEqual([[1, 7]]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [1, 5],
      [7, 12],
    ],
    [12, 18]
  );
  expect(result).toEqual([
    [1, 5],
    [7, 18],
  ]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [3, 5],
      [7, 12],
    ],
    [0, 2]
  );
  expect(result).toEqual([
    [0, 2],
    [3, 5],
    [7, 12],
  ]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [3, 5],
      [7, 12],
    ],
    [0, 3]
  );
  expect(result).toEqual([
    [0, 5],
    [7, 12],
  ]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [2, 4]
  );
  expect(result).toEqual([
    [1, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ]);
});

test('should return the correct result', () => {
  const result = insert(
    [
      [3, 5],
      [12, 15],
    ],
    [6, 6]
  );
  expect(result).toEqual([
    [3, 5],
    [6, 6],
    [12, 15],
  ]);
});

const intervalIntersection = require('./index');

test('should be a function', () => {
  expect(typeof intervalIntersection).toEqual('function');
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  );
  expect(result).toEqual([
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [1, 3],
      [5, 9],
    ],
    []
  );
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [],
    [
      [4, 8],
      [10, 12],
    ]
  );
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = intervalIntersection([[1, 7]], [[3, 10]]);
  expect(result).toEqual([[3, 7]]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [1, 7],
      [8, 12],
      [13, 23],
    ],
    [[24, 33]]
  );
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [5, 7],
      [8, 12],
      [13, 23],
    ],
    [[1, 3]]
  );
  expect(result).toEqual([]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [5, 7],
      [8, 12],
      [13, 23],
    ],
    [[6, 14]]
  );
  expect(result).toEqual([
    [6, 7],
    [8, 12],
    [13, 14],
  ]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [1, 3],
      [5, 7],
      [8, 10],
      [11, 12],
      [13, 14],
      [15, 16],
      [17, 18],
    ],
    [[2, 19]]
  );
  expect(result).toEqual([
    [2, 3],
    [5, 7],
    [8, 10],
    [11, 12],
    [13, 14],
    [15, 16],
    [17, 18],
  ]);
});

test('should return the correct result', () => {
  const result = intervalIntersection(
    [
      [10, 12],
      [18, 19],
    ],
    [
      [1, 6],
      [8, 11],
      [13, 17],
      [19, 20],
    ]
  );
  expect(result).toEqual([
    [10, 11],
    [19, 19],
  ]);
});

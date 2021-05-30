const merge = require('./index');

test('should be a function', () => {
  expect(typeof merge).toEqual('function');
});

test('should return the correct result', () => {
  const result = merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
  expect(result).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});

test('should return the correct result', () => {
  const result = merge([
    [1, 4],
    [4, 5],
  ]);
  expect(result).toEqual([[1, 5]]);
});

test('should return the correct result', () => {
  const result = merge([
    [5, 7],
    [6, 9],
    [8, 12],
  ]);
  expect(result).toEqual([[5, 12]]);
});

test('should return the correct result', () => {
  const result = merge([[5, 7]]);
  expect(result).toEqual([[5, 7]]);
});

test('should return the correct result', () => {
  const result = merge([
    [10, 21],
    [12, 15],
    [2, 4],
    [5, 7],
    [22, 22],
    [6, 9],
    [8, 12],
  ]);
  expect(result).toEqual([
    [2, 4],
    [5, 21],
    [22, 22],
  ]);
});

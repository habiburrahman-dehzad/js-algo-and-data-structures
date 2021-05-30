/**
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 

Constraints:

    1 <= intervals.length <= 10^4
    intervals[i].length == 2
    0 <= starti <= endi <= 10^4


 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];

  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((i1, i2) => i1[0] - i2[0]);

  for (let i = 1; i < intervals.length; i++) {
    let currentInt = intervals[i];
    let prevInt = intervals[i - 1];

    if (currentInt[0] <= prevInt[1]) {
      result.pop();
      let v = [];
      v[0] = Math.min(currentInt[0], prevInt[0]);
      v[1] = Math.max(currentInt[1], prevInt[1]);

      while (i < intervals.length - 1) {
        let next = intervals[i + 1];
        if (next[0] <= v[1]) {
          v[1] = Math.max(v[1], next[1]);
          i++;
        } else {
          break;
        }
      }
      result.push(v);
    } else {
      if (result.length === 0) {
        result.push(prevInt);
      }
      result.push(currentInt);
    }
  }

  return result;
};

console.log(
  merge([
    [10, 21],
    [12, 15],
    [2, 4],
    [5, 7],
    [6, 9],
    [8, 12],
  ])
);

module.exports = merge;

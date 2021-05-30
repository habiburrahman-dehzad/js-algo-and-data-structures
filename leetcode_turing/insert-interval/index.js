/**
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]

Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]

Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]

 

Constraints:

    0 <= intervals.length <= 10^4
    intervals[i].length == 2
    0 <= intervals[i][0] <= intervals[i][1] <= 10^5
    intervals is sorted by intervals[i][0] in ascending order.
    newInterval.length == 2
    0 <= newInterval[0] <= newInterval[1] <= 10^5


 */

/**
Pseudo Code:
    create the result array
    from first interval to last
        if the two intervals overlap
            create new interval
            set its start to smallest start point and its end point to larget end point
            insert the new interval to result
        else if current interval overlaps with previous interval
            create new interval
            set the start point to the smallest and end point to largest
            delete the previous interval from result
            insert the new interval to result
        else
            insert the current interval to result
    
    return the result
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];

  if (intervals.length === 0) {
    return [newInterval];
  }

  if (newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);
    return intervals;
  }

  if (newInterval[0] > intervals[intervals.length - 1][1]) {
    intervals.push(newInterval);
    return intervals;
  }

  for (let i = 0; i < intervals.length; i++) {
    let currentInt = intervals[i];
    let prevInt = i > 0 ? intervals[i - 1] : null;

    if (
      (currentInt[0] <= newInterval[0] && currentInt[1] >= newInterval[0]) ||
      (newInterval[0] <= currentInt[0] && newInterval[1] >= currentInt[0])
    ) {
      let v = [];
      v[0] = Math.min(currentInt[0], newInterval[0]);
      v[1] = Math.max(currentInt[1], newInterval[1]);

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
    } else if (prevInt && currentInt[0] <= prevInt[1]) {
      let v = [prevInt[0], currentInt[1]];
      result.pop();
      result.push(v);
    } else {
      if (newInterval[1] < currentInt[0]) {
        if (prevInt && newInterval[0] > prevInt[1]) {
          result.push(newInterval);
        }
        result.push(...intervals.slice(i));
        break;
      } else {
        result.push(currentInt);
      }
    }
  }

  return result;
};

module.exports = insert;

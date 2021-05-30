/**
Given a list of intervals, remove all intervals that are covered by another interval in the list.

Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

 

Example 1:

Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:

Input: intervals = [[1,4],[2,3]]
Output: 1

Example 3:

Input: intervals = [[0,10],[5,12]]
Output: 2

Example 4:

Input: intervals = [[3,10],[4,10],[5,11]]
Output: 2

Example 5:

Input: intervals = [[1,2],[1,4],[3,4]]
Output: 1

 

Constraints:

    1 <= intervals.length <= 1000
    intervals[i].length == 2
    0 <= intervals[i][0] < intervals[i][1] <= 10^5
    All the intervals are unique.

 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  for (let i = 0; i < intervals.length; i++) {
    let iv = intervals[i];
    for (let j = i + 1; j < intervals.length; j++) {
      let jv = intervals[j];

      // if either iv is covered by jv or jv is covered by iv we need to remove one
      // of them
      if (iv[0] <= jv[0] && iv[1] >= jv[1]) {
        // if jv is covered by iv remove jv. Once we remove the interval at index
        // j the following interval will take its place. We need to check it, thus
        // decrease j to check the new element.
        intervals.splice(j, 1);
        j--;
      } else if (jv[0] <= iv[0] && jv[1] >= iv[1]) {
        // if iv is covered by jv remove iv and break out of this inner loop because
        // it is for iv. Once we remove the element at i, the following element will take
        // its place. We need to check the new element. Thus decrease i;
        intervals.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return intervals.length;
};

module.exports = removeCoveredIntervals;

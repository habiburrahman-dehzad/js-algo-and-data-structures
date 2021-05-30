/**
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

 

Constraints:

    n == height.length
    0 <= n <= 3 * 10^4
    0 <= height[i] <= 10^5

 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let levels = [];

  let trapped = 0;
  let current = 0;
  while (current < height.length) {
    while (
      levels.length > 0 &&
      height[current] > height[levels[levels.length - 1]]
    ) {
      let last = levels.pop();
      if (levels.length === 0) {
        break;
      }

      let top = levels[levels.length - 1];
      let h = Math.min(height[top], height[current]) - height[last];
      trapped += h * (current - top - 1);
    }

    levels.push(current++);
  }

  return trapped;
};

console.log(trap([4, 2, 0, 3, 2, 5]));

module.exports = trap;

/*
var trap = function (height) {
  let ans = 0,
    current = 0;
  let st = [];
  while (current < height.length) {
    while (st.length > 0 && height[current] > height[st[st.length - 1]]) {
      let top = st.pop();
      if (st.length === 0) {
        break;
      }
      let distance = current - st[st.length - 1] - 1;
      let bounded_height =
        Math.min(height[current], height[st[st.length - 1]]) - height[top];
      ans += distance * bounded_height;
    }
    st.push(current++);
  }
  return ans;
};
*/

/**
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 

Constraints:

    3 <= nums.length <= 10^3
    -10^3 <= nums[i] <= 10^3
    -10^4 <= target <= 10^4


 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closeSum;
  let diff;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] >= nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        let s = nums[i] + nums[j] + nums[k];

        if (closeSum === undefined) {
          closeSum = s;
          diff = s - target;
        } else {
          let d = s - target;

          if (Math.abs(d) < Math.abs(diff)) {
            closeSum = s;
            diff = d;

            while (j < k && nums[j] === nums[j - 1]) {
              j++;
            }
          }

          if (d < 0) {
            j++;
          } else if (d > 0) {
            k--;
          } else {
            return closeSum;
          }
        }
      }
    }
  }

  return closeSum;
};

console.log(threeSumClosest([-2, -5, 1, 9, 7, 2, 12], 6));

module.exports = threeSumClosest;

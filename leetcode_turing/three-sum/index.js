/**
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

 

Constraints:

    0 <= nums.length <= 3000
    -10^5 <= nums[i] <= 10^5


 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i == 0 || nums[i] != nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        } else {
          result.push([nums[i], nums[j++], nums[k--]]);

          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-2, 0, 1, 2, -1, -4, -2, 5, -3, 6]));

module.exports = threeSum;

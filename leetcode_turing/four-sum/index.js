/**
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:

Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

 

Constraints:

    1 <= nums.length <= 200
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  return kSum(nums, target, 0, 4);
};

function kSum(nums, target, start, k) {
  let res = [];

  if (
    start === nums.length ||
    nums[start] * k > target ||
    target > nums[nums.length - 1] * k
  ) {
    return res;
  }

  if (k === 2) {
    return twoSum(nums, target, start);
  }

  for (let i = start; i < nums.length; ++i) {
    if (i === start || nums[i - 1] !== nums[i]) {
      for (let a of kSum(nums, target - nums[i], i + 1, k - 1)) {
        res.push([nums[i]]);
        res[res.length - 1].push(...a);
      }
    }
  }
  return res;
}

function twoSum(nums, target, start) {
  let res = [];
  let lo = start;
  let hi = nums.length - 1;
  while (lo < hi) {
    let sum = nums[lo] + nums[hi];
    if (sum < target || (lo > start && nums[lo] === nums[lo - 1])) {
      ++lo;
    } else if (
      sum > target ||
      (hi < nums.length - 1 && nums[hi] === nums[hi + 1])
    ) {
      --hi;
    } else {
      res.push([nums[lo++], nums[hi--]]);
    }
  }
  return res;
}

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));

module.exports = fourSum;

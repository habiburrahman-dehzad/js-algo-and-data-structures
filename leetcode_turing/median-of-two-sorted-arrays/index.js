/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const result = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }

  result.push(...nums1);
  result.push(...nums2);

  const floor = Math.floor((result.length - 1) / 2);
  const ceil = Math.ceil((result.length - 1) / 2);

  let med = (result[floor] + result[ceil]) / 2;

  return med;
};

module.exports = findMedianSortedArrays;

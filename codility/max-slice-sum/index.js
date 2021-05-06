function solution(A) {
  let maxSlice = -2147483648;
  let maxEnding = 0;
  for (let i = 0; i < A.length; i++) {
    maxEnding = Math.max(maxEnding + A[i], A[i]);

    maxSlice = Math.max(maxEnding, maxSlice);
  }

  return maxSlice;
}

console.log(solution([3, 2, -6, 4, 0]));

module.exports = solution;

/*
function solution(A) {
  let maxSum = 0;
  let max_sums = [];
  let reverseSums = [];

  for (const a of A) {
    maxSum = maxSum + a;
    max_sums.push(maxSum);
  }

  maxSum = 0;
  for (let i = A.length - 1; i >= 0; i--) {
    maxSum = maxSum + A[i];
    reverseSums.push(maxSum);
  }

  maxSum = A[0];
  for (let i = 1; i < max_sums.length; i++) {
    maxSum = Math.max(maxSum, max_sums[i]);
    maxSum = Math.max(maxSum, max_sums[i] - max_sums[i - 1]);
  }

  maxSum = Math.max(maxSum, reverseSums[0]);
  for (let i = 1; i < reverseSums.length; i++) {
    maxSum = Math.max(maxSum, reverseSums[i]);
    maxSum = Math.max(maxSum, reverseSums[i] - reverseSums[i - 1]);
  }

  return maxSum;
}
*/

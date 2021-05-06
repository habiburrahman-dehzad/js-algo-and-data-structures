function solution(A) {
  if (A.length === 0 || A.length === 1) {
    return 0;
  }

  if (A.length === 2) {
    return A[1] > A[0] ? A[1] - A[0] : 0;
  }

  let maxProfit = 0;
  let minPrice = A[0];
  let minIndex = 0;
  let maxPrice = A[0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] < minPrice) {
      minPrice = A[i];
      minIndex = i;
      maxPrice = A[i];
    }
    maxPrice = Math.max(maxPrice, A[i]);
    maxProfit = Math.max(maxProfit, maxPrice - minPrice);
  }

  return maxProfit;
}

console.log(solution([23171, 21000, 21123, 25300, 20010, 21360]));

module.exports = solution;

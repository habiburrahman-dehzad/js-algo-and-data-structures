function solution(A) {
  if (A.length < 3) {
    return 0;
  }

  // sort in ascending order
  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length - 2; i++) {
    const sum1 = A[i + 1] + A[i];
    const sum2 = A[i + 2] + A[i];
    const sum3 = A[i + 2] + A[i + 1];

    if (sum1 > A[i + 2] && sum2 > A[i + 1] && sum3 > A[i]) {
      return 1;
    }
  }

  return 0;
}

module.exports = solution;

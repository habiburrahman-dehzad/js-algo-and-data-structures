function solution(A) {
  let leftSum = Array(A.length).fill(0);
  let rightSum = Array(A.length).fill(0);

  // use double index one going forward from left and one going
  // sbackward from right
  for (
    var leftIndex = 1, rightIndex = A.length - 2;
    rightIndex >= 2;
    leftIndex++, rightIndex--
  ) {
    //verify with 0, minimum max sum is 0 anyway
    leftSum[leftIndex] = Math.max(0, leftSum[leftIndex - 1] + A[leftIndex]);
    rightSum[rightIndex] = Math.max(
      0,
      rightSum[rightIndex + 1] + A[rightIndex]
    );
  }
  //initialize max with the first double slice sum
  var max = leftSum[0] + rightSum[2];

  for (var i = 2; i < A.length - 1; i++) {
    max = Math.max(max, leftSum[i - 1] + rightSum[i + 1]);
  }

  return max;
}

console.log(solution([5, -7, 3, 5, -2, 4, -1]));
console.log(solution([3, 2, 6, -1, 4, 5, -1, 2]));

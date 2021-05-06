function solution(A) {
  let counter = 0;
  let leftLimit = [];
  let rightLimit = [];
  let j = 0;

  for (let i = 0; i < A.length; i++) {
    leftLimit[i] = i - A[i];
    rightLimit[i] = i + A[i];
  }

  leftLimit.sort((a, b) => a - b);
  rightLimit.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    while (j < A.length && rightLimit[i] >= leftLimit[j]) {
      counter += j - i;
      j++;
    }

    if (counter > 10000000) {
      return -1;
    }
  }

  return counter;
}

console.log(solution([1, 5, 2, 1, 4, 0]));

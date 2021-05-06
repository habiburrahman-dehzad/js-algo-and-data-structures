function solution(A) {
  if (A.length === 0) {
    return -1;
  }

  if (A.length === 1) {
    return 0;
  }

  if (A.length === 2) {
    return A[0] === A[1] ? 0 : -1;
  }

  let leader = 0;
  let size = 0;

  for (const item of A) {
    if (size === 0) {
      leader = item;
      size++;
      continue;
    }

    if (leader === item) {
      size++;
    } else {
      size--;
    }
  }

  if (size === 0) {
    return -1;
  }

  let count = 0;
  for (const val of A) {
    if (val === leader) {
      count++;
    }
  }

  if (count > A.length / 2) {
    return A.indexOf(leader);
  }

  return -1;
}

console.log(solution([5, 4, 3, 2, 6, -1, 3, 3]));

module.exports = solution;

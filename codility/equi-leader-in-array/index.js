function solution(A) {
  if (A.length === 1) {
    return 0;
  }

  if (A.length === 2) {
    return A[0] === A[1] ? 1 : 0;
  }

  // finding the leader
  let size = 0;
  let leader = 0;
  for (const value of A) {
    if (size === 0) {
      leader = value;
      size++;
      continue;
    }

    if (value === leader) {
      size++;
    } else {
      size--;
    }
  }

  if (size === 0) {
    // No leader found
    return 0;
  }

  let count = 0;
  for (const value of A) {
    if (value === leader) {
      count++;
    }
  }

  if (count <= A.length / 2) {
    return 0;
  }

  // We found the leader. Now lets find the equileaders
  let equiLeaders = 0;
  let newCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (leader === A[i]) {
      newCount++;
    }

    if (newCount > (i + 1) / 2 && count - newCount > (A.length - (i + 1)) / 2) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));

module.exports = solution;

function solution(A) {
  let maxEnding = 0,
    maxSlice = 0;

  for (const a of A) {
    maxEnding = Math.max(0, maxEnding + a);
    maxSlice = Math.max(maxSlice, maxEnding);
  }

  return maxSlice;
}

console.log(solution([5, -7, 3, 5, -2, 4, -1]));

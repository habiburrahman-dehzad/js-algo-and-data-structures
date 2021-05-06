function solution(N) {
  let min = 2 * (1 + N);
  let minPerim = min;

  let i = 2;
  while (i * i <= N) {
    if (N % i === 0) {
      let inv = N / i;
      min = Math.min(min, 2 * (i + inv));

      minPerim = Math.min(minPerim, min);
    }

    i++;
  }

  return minPerim;
}

console.log(solution(2));

module.exports = solution;

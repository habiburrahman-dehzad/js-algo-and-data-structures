function solution(n) {
  let result = 0;

  let f = 1;
  while (f * f < n) {
    if (n % f === 0) {
      result += 2;
    }

    f++;
  }

  if (f * f === n) {
    result += 1;
  }

  return result;
}

console.log(solution(1245));
module.exports = solution;

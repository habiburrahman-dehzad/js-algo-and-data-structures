function solution(A, B) {
  if (A.lenth === 1) {
    return 1;
  }

  const remaining = [];
  const fishStack = [];

  for (let i = 0; i < A.length; i++) {
    // if the fish is going upstream and there is no fish ahead
    // it will survive
    if (fishStack.length === 0 && B[i] === 0) {
      remaining.push(A[i]);
      continue;
    }

    const newFish = A[i];

    if (B[i] === 1) {
      fishStack.push(newFish);
      continue;
    }

    let eaten = false;
    while (fishStack.length > 0) {
      const fish = fishStack.pop();

      if (fish > newFish) {
        fishStack.push(fish);
        eaten = true;
        break;
      }
    }

    if (!eaten) {
      remaining.push(A[i]);
    }
  }

  return remaining.length + fishStack.length;
}

console.log(solution([3, 5, 4, 1, 2, 6, 8, 7], [0, 1, 0, 1, 0, 1, 0, 1]));

module.exports = solution;

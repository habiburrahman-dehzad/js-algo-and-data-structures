function generatePermutations(s) {
  const result = [];

  function generate(k, A) {
    if (k === 1) {
      result.push(A.join(''));
    } else {
      // Generate permutations with kth unaltered
      // Initially k === A.length
      generate(k - 1, A);

      // Generate permutations for kth swapped with each k-1 initial
      for (let i = 0; i < k - 1; i++) {
        // Swap choice dependent on parity of k (even or odd)
        if (k % 2 === 0) {
          // if k is even
          // zero-indexed, the kth is at k-1
          [A[i], A[k - 1]] = [A[k - 1], A[i]];
        } else {
          [A[0], A[k - 1]] = [A[k - 1], A[0]];
        }
        generate(k - 1, A);
      }
    }
  }

  generate(s.length, s.split(''));

  const uniques = result.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });

  return uniques;
}

console.log(generatePermutations('turing'));

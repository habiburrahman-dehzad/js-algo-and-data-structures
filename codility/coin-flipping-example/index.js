/*

Problem: Consider n coins aligned in a row. Each coin is showing heads at the beginning.

1-head   2-head   3-head   4-head   5-head   6-head   7-head   8-head   9-head   10-head

Then, n people turn over corresponding coins as follows. Person i reverses coins with 
numbers that are multiples of i. That is, person i ﬂips coins i, 2 x i, 3 x i,... until 
no more appropriate coins remain. The goal is to count the number of coins showing tails. 
In the above example, the ﬁnal conﬁguration is:

1-tail   2-head   3-head   4-tail   5-head   6-head   7-head   8-head   9-tail   10-head

Solution O(Nlog(N)): We can simulate the results of each person reversing coins.

*/
function coins(n) {
  let result = 0;
  let coin = Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    let k = i;
    while (k <= n) {
      coin[k] = (coin[k] + 1) % 2;
      k += i;
    }
    result += coin[i];
  }

  return result;
}

console.log(coins(10));

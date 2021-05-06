function solution(N) {
  let target = '1';
  let queue = [];
  let visited = [];
  queue.push(target);
  while (queue.length > 0) {
    target = queue.shift();
    let remainder = parseInt(target) % N;

    // if it is devisible by N and the remainder is 0
    // we found the solution
    if (remainder === 0) return target;

    // if it is not previously visited target
    // then lets add a zero to the right and add to the queue
    // and then add a one to the right of the target and add to
    // the queue for processing.
    if (!visited.includes(target)) {
      visited.push(target);
      queue.push(target + '0');
      queue.push(target + '1');
    }
  }
}

module.exports = solution;

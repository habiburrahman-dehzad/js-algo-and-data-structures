function solution(H) {
  if (H.length === 1) {
    return 1;
  }

  let blocks = 0;
  const blkLevels = [];

  for (const level of H) {
    if (blkLevels.length === 0) {
      blocks++;
      blkLevels.push(level);
      continue;
    }

    while (blkLevels.length > 0) {
      const lvl = blkLevels.pop();
      if (level > lvl) {
        blkLevels.push(lvl);
        blkLevels.push(level);
        blocks++;
        break;
      } else if (level < lvl) {
        if (blkLevels.length === 0) {
          blocks++;
          blkLevels.push(level);
        }
      } else {
        blkLevels.push(lvl);
        break;
      }
    }
  }

  return blocks;
}

console.log(solution([9, 8, 8, 9, 3, 5, 2, 8, 7, 7, 9, 1, 2, 3, 4, 3, 3, 2]));

module.exports = solution;

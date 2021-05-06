function findPerm(s) {
  if (s.length === 0) return '';
  if (s.length === 1) return s;

  let result = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const remainingChars = s.slice(0, i) + s.slice(i + 1);

    const perms = findPerm(remainingChars);
    for (let j = 0; j < perms.length; j++) {
      result.push(currentChar + perms[j]);
    }
  }

  return result;
}

console.log(findPerm('turing'));

function create_peaks(A) {
  let N = A.length;
  let peaks = Array(N).fill(false);

  for (let i = 1; i < N - 1; i++) {
    if (A[i] > Math.max(A[i - 1], A[i + 1])) {
      peaks[i] = true;
    }
  }

  return peaks;
}

function next_peak(A) {
  let N = A.length;
  let peaks = create_peaks(A);
  let next = Array(N).fill(0);

  next[N - 1] = -1;

  for (let i = N - 2; i >= 0; i--) {
    if (peaks[i]) {
      next[i] = i;
    } else {
      next[i] = next[i + 1];
    }
  }

  return next;
}

function solution(A) {
  let N = A.length;
  let next = next_peak(A);
  let i = 1;
  let result = 0;

  while ((i - 1) * i <= N) {
    let pos = 0;
    let num = 0;

    while (pos < N && num < i) {
      pos = next[pos];

      if (pos === -1) {
        break;
      }

      num += 1;
      pos += i;
    }

    result = Math.max(result, num);
    i++;
  }

  return result;
}

console.log(
  solution([
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
    4,
    2,
  ])
);

module.exports = solution;

/*
function solution(A) {
  if (A.length === 1 || A.length === 2) {
    return 0;
  }

  let peaks = [];
  let increased = false;
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1]) {
      increased = true;
    } else if (A[i] < A[i - 1] && increased) {
      // save the peak with its index
      peaks.push(i - 1);
      increased = false;
    }
  }

  const totalSpan = peaks[peaks.length - 1] - peaks[0];
  let span = 1;
  do {
    span++;
  } while (span * span < totalSpan);

  let peakIndex = peaks[0];
  let j = 0;
  let flags = 0;
  while (j < peaks.length) {
    flags++;
    j++;

    peakIndex += span;
    while (peaks[j] < peakIndex) {
      j++;
    }

    peakIndex = peaks[j];
  }

  return flags;
}
*/

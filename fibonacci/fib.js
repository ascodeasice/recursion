// returns array of fibonacci numbers from 1 to n
function fibs(n) {
  if (typeof n != 'number' || n <= 0) {
    return [];
  }

  let arr = []
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

// returns array of fibonacci numbers from 1 to n (with recursion and in one line)
function fibsRecOneLine(n) {
  return n === 1 ? [0] : n === 2 ? [0, 1] : fibsRec(n - 1).concat([fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3]]);
}

function fibsRec(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const nthFib = fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3];
  // the n-th fib number is sum of last numbers in array
  return fibsRec(n - 1).concat([nthFib]);
}

console.log(fibs(8));
/*
[
  0, 1, 1,  2,
  3, 5, 8, 13
]
*/

console.log(fibsRecOneLine(8));
/*
[
  0, 1, 1,  2,
  3, 5, 8, 13
]
*/

console.log(fibsRec(8));
/*
[
  0, 1, 1,  2,
  3, 5, 8, 13
]
*/
function merge(arr1, arr2) {
  // merge sliced arrays
  let result = [];
  let i = 0;
  let j = 0;
  let len1 = arr1.length;
  let len2 = arr2.length;

  while (i < len1 || j < len2) {
    if (i < len1 && j < len2) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    } else {
      if (i < len1) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  }
  return result;
}

function mergeSort(arr) {
  // slice arr to left and right
  const len = arr.length;
  if (arr.length == 1) {
    return arr;
  }
  const mid = Math.floor(len / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log(mergeSort([3, 2, 1, 5, 6, -1]));
// [ -1, 1, 2, 3, 5, 6 ]
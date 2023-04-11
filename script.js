//your JS code here. If required.
function secondHighest(arr) {
  // If the array is empty or has only one element, or all elements are the same, return -Infinity.
  if (arr.length < 2 || new Set(arr).size === 1) {
    return -Infinity;
  }

  // Find the highest element in the array.
  let highest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  // Find the second highest element in the array.
  let secondHighest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondHighest && arr[i] < highest) {
      secondHighest = arr[i];
    }
  }

  return secondHighest;
}


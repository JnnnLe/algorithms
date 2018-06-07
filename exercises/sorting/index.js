// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {

    let indexMinOfArr = i;
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[indexMinOfArr]) {
        indexMinOfArr = j;
      }
    }

    if (indexMinOfArr !== i) {
      let lesser = arr[indexMinOfArr];
      arr[indexMinOfArr] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) { return arr; }

  //divide arr into halves
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  //divide the arr into 2 arrays, when successful
    //call merge on the right and left array to return a single sorted arr
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

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

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };

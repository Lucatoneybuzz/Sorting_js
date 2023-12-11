function insertionSort(arr) {
    const len = arr.length;
    
    for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than key to one position ahead
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      // Insert the stored element at its correct position
      arr[j + 1] = key;
    }
  }
  
  // Example usage:
  let myArray = [12, 11, 13, 5, 6];
  insertionSort(myArray);
  console.log("Sorted array:", myArray);
  
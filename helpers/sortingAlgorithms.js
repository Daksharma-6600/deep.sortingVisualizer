class SortingAlgorithms {

  // Existing Bubble Sort
  bubbleSort(array) {
    const swaps = []
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
          swaps.push({ firstPostion: j, lastPosition: j + 1 })
        }
      }
    }
    return swaps
  }

  // Existing Selection Sort
  selectionSort(array) {
    const swaps = []
    let min
    for (let i = 0; i < array.length - 1; i++) {
      min = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) {
          min = j
        }
      }
      let temp = array[min]
      array[min] = array[i]
      array[i] = temp
      swaps.push({ firstPostion: min, lastPosition: i })
    }
    return swaps
  }

  // Existing Quick Sort
  quickSort(array, compareFn = defaultCompare) {
    swaps = []
    quick(array, 0, array.length - 1, compareFn)
    return swaps
  }

  // New Insertion Sort
  insertionSort(array) {
    const swaps = []
    for (let i = 1; i < array.length; i++) {
      let current = array[i]
      let j = i - 1
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j]
        swaps.push({ firstPostion: j, lastPosition: j + 1 })
        j--
      }
      array[j + 1] = current
    }
    return swaps
  }

  // New Merge Sort
  mergeSort(array, compareFn = defaultCompare) {
    swaps = []
    if (array.length > 1) {
      const { length } = array
      const middle = Math.floor(length / 2)
      const left = this.mergeSort(array.slice(0, middle), compareFn)
      const right = this.mergeSort(array.slice(middle), compareFn)
      array = this.merge(left, right, compareFn)
    }
    return array
  }

  // Helper function for Merge Sort
  merge(left, right, compareFn) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
      if (compareFn(left[indexLeft], right[indexRight]) === Compare.LESS_THAN) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
}

export {
  SortingAlgorithms
}

class MaxBinaryHeap {
  constructor() {
    /** @member {number[]} heap */
    this._heap = [];
  }

  /**
   * @description Takes number array and builds a heap from its values.
   * @param {number[]} arr number[]
   */
  buildHeap(arr) {
    this._heap = arr;

    if (this.size < 2) return;

    for (let i = 1; i < this.size; i++) {
      this._bubbleUp(i);
    }
  }

  /**
   * @description Removes and returns largest value within heap or returns null if heap is empty.
   * @return {(number|null)} Largest number in heap or null.
   */
  extractMax() {
    if (this.isEmpty) return null;
    if (this.size === 1) return this._heap.pop();

    const max = this.max;

    this._swap(0, this.size - 1);
    this._heap.pop();
    this._bubbleDown(0);

    return max;
  }

  /**
   * @description Places the number into the heap.
   * @param {number} num Number to add to the heap.
   */
  insert(num) {
    if (typeof num === "number") {
      this._heap.push(num);
      this._bubbleUp(this.size - 1);
    }
  }

  /**
   * @description Returns boolean based on items within the heap.
   * @returns {boolean} boolean
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * @description Returns the items within the heap as an array.
   * @returns {number[]} number[]
   */
  get list() {
    return this._heap;
  }

  /**
   * @description Gets the largest item within the heap. Returns null if heap is empty.
   * @returns {(number|null)} number | null
   */
  get max() {
    return this.isEmpty() ? null : this._heap[0];
  }

  /**
   * @description Gets the amount of items within the heap.
   * @returns {number} number
   */
  get size() {
    return this._heap.length;
  }

  /**
   * @description Moves the element at the specified index down into the correct heap position.
   * @param {number} idx Zero based index of element
   */
  _bubbleDown(idx) {
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      const left = this._heap[leftIdx];
      const right = this._heap[rightIdx];
      let element = this._heap[idx];
      let swapIdx = idx;

      if (leftIdx < this.size && left > element) {
        swapIdx = leftIdx;
        element = left;
      }
      if (rightIdx < this.size && right > element) {
        swapIdx = rightIdx;
      }
      if (swapIdx === idx) {
        break;
      }

      this._swap(idx, swapIdx);
      idx = swapIdx;
    }
  }

  /**
   * @description Moves the element at the specified index up into the correct heap position.
   * @param {number} idx Zero based index of element
   */
  _bubbleUp(idx) {
    while (idx > 0) {
      const element = this._heap[idx];
      const parentIdx = Math.trunc((idx - 1) / 2);
      const parent = this._heap[parentIdx];

      if (element <= parent) break;

      this._swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  /**
   * @description Switches the values of the indexes.
   * @param {number} idx1 number
   * @param {number} idx2 number
   */
  _swap(idx1, idx2) {
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }
}

class MinBinaryHeap {
  constructor() {
    /** @member {number[]} heap */
    this._heap = [];
  }

  /**
   * @description Takes number array and builds a heap from its values.
   * @param {number[]} arr number[]
   */
  buildHeap(arr) {
    this._heap = arr;

    if (this.size < 2) return;

    for (let i = 1; i < this.size; i++) {
      this._bubbleUp(i);
    }
  }

  /**
   * @description Removes and returns smallest value within heap or returns null if heap is empty.
   * @return {(number|null)} Largest number in heap or null.
   */
  extractMin() {
    if (this.isEmpty) return null;
    if (this.size === 1) return this._heap.pop();

    const min = this.min;

    this._swap(0, this.size - 1);
    this._heap.pop();
    this._bubbleDown(0);

    return min;
  }

  /**
   * @description Places the number into the heap.
   * @param {number} num Number to add to the heap.
   */
  insert(num) {
    if (typeof num === "number") {
      this._heap.push(num);
      this._bubbleUp(this.size - 1);
    }
  }

  /**
   * @description Returns boolean based on items within the heap.
   * @returns {boolean} boolean
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * @description Returns the items within the heap as an array.
   * @returns {number[]} number[]
   */
  get list() {
    return this._heap;
  }

  /**
   * @description Gets the largest item within the heap. Returns null if heap is empty.
   * @returns {(number|null)} number | null
   */
  get min() {
    return this.isEmpty ? null : this._heap[0];
  }

  /**
   * @description Gets the amount of items within the heap.
   * @returns {number} number
   */
  get size() {
    return this._heap.length;
  }

  /**
   * @description Moves the element at the specified index down into the correct heap position.
   * @param {number} idx Zero based index of element
   */
  _bubbleDown(idx) {
    while (true) {
      const leftIdx = idx * 2 + 1;
      const rightIdx = idx * 2 + 2;
      const left = this._heap[leftIdx];
      const right = this._heap[rightIdx];
      let element = this._heap[idx];
      let swapIdx = idx;

      if (leftIdx < this.size && left < element) {
        element = left;
        swapIdx = leftIdx;
      }
      if (rightIdx < this.size && right < element) {
        swapIdx = rightIdx;
      }
      if (swapIdx === idx) {
        break;
      }

      this._swap(idx, swapIdx);
      idx = swapIdx;
    }
  }

  /**
   * @description Moves the element at the specified index up into the correct heap position.
   * @param {number} idx Zero based index of element
   */
  _bubbleUp(idx) {
    while (idx > 0) {
      const element = this._heap[idx];
      const parentIdx = Math.trunc((idx - 1) / 2);
      const parent = this._heap[parentIdx];

      if (element >= parent) break;

      this._swap(idx, parentIdx);
      idx = parentIdx;
    }
  }

  /**
   * @description Switches the values of the indexes.
   * @param {number} idx1 number
   * @param {number} idx2 number
   */
  _swap(idx1, idx2) {
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }
}

class MaxBinaryHeap2 {
  constructor() {
    this.values = [];
  }
  bubbleDown() {
    let idx = 0;
    let element = this.values[idx];

    while (idx < this.values.length - 1) {
      const leftChildIdx = idx * 2 + 1;
      const rightChildIdx = idx * 2 + 2;
      const leftChild = this.values[leftChildIdx];
      const rightChild = this.values[rightChildIdx];
      let largerChildIdx = null;

      if (rightChild !== undefined && leftChild !== undefined) {
        if (rightChild > leftChild) {
          largerChildIdx = rightChildIdx;
        } else {
          largerChildIdx = leftChildIdx;
        }
      } else if (leftChild !== undefined) {
        largerChildIdx = leftChildIdx;
      }

      if (largerChildIdx === null || element > this.values[largerChildIdx]) {
        break;
      }

      this.swap(idx, largerChildIdx);
      idx = largerChildIdx;
    }
  }
  bubbleUp() {
    const lastIdx = this.values.length - 1;
    const insertedElement = this.values[lastIdx];
    let idx = lastIdx;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if (insertedElement > parent) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  buildHeap(elements) {
    for (let i = 0; i < elements.length; i++) {
      this.insert(elements[i]);
    }
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  extractMax() {
    if (this.values.length === 0) return null;

    const firstIndex = 0;
    const lastIdx = this.values.length - 1;
    const maxElement = this.values[firstIndex];

    // swap max with end
    // pop off max
    this.swap(firstIndex, lastIdx);
    this.values.pop();

    // bubble down
    this.bubbleDown();

    return maxElement;
  }
  swap(idx1, idx2) {
    const temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}
const heap = new MaxBinaryHeap2();
heap.buildHeap([41, 39, 33, 18, 27, 12]);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);

/*

[41, 39, 33, 18, 27, 12]
[12, 39, 33, 18, 27]

*/

module.exports = {
  MaxBinaryHeap,
  MinBinaryHeap,
};

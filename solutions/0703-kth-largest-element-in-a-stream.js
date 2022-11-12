/*
    Solution:

    Sorts the values and then adds new values in order.
    Returns the specified index of "k".
*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => b - a);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  let left = 0,
    right = this.nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2),
      midNum = this.nums[mid];

    if (midNum === val) {
      left = mid;
      break;
    } else if (midNum > val) {
      left = mid + 1;
    } else if (midNum < val) {
      right = mid - 1;
    }
  }
  this.nums.splice(left, 0, val);
  return this.nums[this.k - 1];
};

/*
    Solution:

    minHeap that we keep restricted to the "k" index that we want to follow.
    If we go over the "k" amount we pop off the smallest item we have in our heap.
*/

class MinBinaryHeap {
  constructor() {
    this._heap = [];
  }

  extractMin() {
    if (this.isEmpty) return null;
    if (this.size === 1) return this._heap.pop();

    const min = this._heap[0];

    this._swap(0, this.size - 1);
    this._heap.pop();
    this._bubbleDown(0);

    return min;
  }

  insert(num) {
    this._heap.push(num);
    this._bubbleUp(this.size - 1);
  }

  get isEmpty() {
    return this.size === 0;
  }

  get min() {
    return this.isEmpty ? null : this._heap[0];
  }

  get size() {
    return this._heap.length;
  }

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

  _swap(idx1, idx2) {
    const temp = this._heap[idx1];
    this._heap[idx1] = this._heap[idx2];
    this._heap[idx2] = temp;
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinBinaryHeap();
  nums.forEach((num) => this.add(num));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.insert(val);

  if (this.minHeap.size > this.k) {
    this.minHeap.extractMin();
  }

  return this.minHeap.min;
};

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);

// console.log(kthLargest); // { k: 3 minHeap._heap: [4,5,8] }
// console.log(kthLargest.add(3)); // 4
// console.log(kthLargest.add(5)); // 5
// console.log(kthLargest.add(10)); // 5
// console.log(kthLargest.add(9)); // 8
// console.log(kthLargest.add(4)); // 8

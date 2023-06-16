/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const output = [];

  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    let nextFound = false;

    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        found = true;
      }
      if (found && nums2[j] > nums1[i]) {
        output.push(nums2[j]);
        nextFound = true;
        break;
      }
    }

    if (!nextFound) {
      output.push(-1);
    }
  }

  return output;
};

module.exports = nextGreaterElement;

/*
    We need to find the value of nums1[i] in nums2
    from that index we need to traverse through nums2 till we find
    a value that is greater than nums1[i]
    if we don't find one add -1 to the output.
*/

function hasTargetSum(nums, target) {
  // Create an empty set to store the numbers we have seen so far
  let seenNumbers = new Set();

  // Iterate through the array
  for (let num of nums) {
    // Calculate the complement needed to reach the target
    let complement = target - num;

    // Check if the complement is in the set
    if (seenNumbers.has(complement)) {
      return true; // Found a pair that adds up to the target
    }

    // Add the current number to the set
    seenNumbers.add(num);
  }

  // No pair was found
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

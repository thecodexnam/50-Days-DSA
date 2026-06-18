let arr = [1, 2, 3, 4, 6];
let target = 6;

function hasPairWithSum(arr, target) {
  // Edge case: Need at least 2 elements for a pair
  if (arr.length < 2) {
    return false;
  }
  
  // Initialize pointers
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    
    // Check if we found the target
    if (currentSum === target) {
      console.log(`Found pair: ${arr[left]} + ${arr[right]} = ${target}`);
      return true;
    }
    
    // If sum is too big, we need a smaller number
    // Move right pointer to the left
    else if (currentSum > target) {
      right--;
    }
    
    // If sum is too small, we need a bigger number
    // Move left pointer to the right
    else {
      left++;
    }
  }
  
  // If we exit the loop, no pair was found
  return false;
}

// Test cases
console.log(hasPairWithSum([1, 2, 3, 4, 6], 6));     // true (2+4)
console.log(hasPairWithSum([1, 2, 3, 4, 6], 10));    // true (4+6)
console.log(hasPairWithSum([1, 2, 3, 4, 6], 20));    // false
console.log(hasPairWithSum([1, 2, 3, 4, 6], 3));     // true (1+2)

// function PairwithGivenSum(arr,target) {
//   if (arr.length < 2) {
//     return false;
//   }

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let currentSum = arr[left] + arr[right];

//     if (currentSum == target) {
//       console.log(`Found pair: ${arr[left]} + ${arr[right]} = ${target}`);
//       return true;
//     } else if (currentSum > target) {
//       right--;
//     } else {
//       left++;
//     }
//     return false;
//   }
// }

// console.log(PairwithGivenSum(arr,target));

let arr = [60, 70, 80, 90, 100, 110, 120]; //res=180;
let arr1=[1,2,3,2,1]

function CheckPalindrome(arr) {
  if (arr.length < 1) {
    return true;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(CheckPalindrome(arr1));


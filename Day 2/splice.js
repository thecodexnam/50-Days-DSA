
// //           splice(start, howManyToRemove)
// nums.splice(4, 2);  // Remove 2 elements starting at index 2
// //123478910
// console.log(nums);  // [1, 2, 5]


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let a = nums.map((val)=>{
//     return val * val;
// })

// let a = nums.filter((val)=>{
//     return val%2 == 0;
// })

let a = nums.reduce((curr,next)=>{
    return curr + next;
})

console.log(a);



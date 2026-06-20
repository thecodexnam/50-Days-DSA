// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// // Access elements using index
// console.log(fruits[0]);  // 'Apple'  (first element)
// console.log(fruits[1]);  // 'Banana' (second element)
// console.log(fruits[3]);  // 'Mango'  (fourth element)

// // Get array length
// console.log(fruits.length);  // 4

// // Last element (common trick!)
// console.log(fruits[fruits.length - 2]);  // 'Mango'

const numbers = [1, 2, 3, 4, 5];

// Remove elements
// splice(start, deleteCount)
numbers.splice(2, 2);  // From index 2, remove 2 elements
console.log(numbers);   // [1, 2, 5]

// Add elements
const fruits = ['Apple', 'Orange'];
fruits.splice(1, 0, 'Banana');  // At index 1, remove 0, add 'Banana'
console.log(fruits);  // ['Apple', 'Banana', 'Orange']

// Replace elements
const colors = ['Red', 'Green', 'Blue', 'Black']; //3
colors.splice(1, 2, 'Yellow');  // At index 1, remove 1, add 'Yellow'
console.log(colors);  // ['Red', 'Yellow', 'Blue']  // red, green, yellow
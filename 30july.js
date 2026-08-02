// // Find GCD of two numbers

// let a = 18;
// let b = 48;

// function findGCD(a,b){
//     while(b !== 0 && a !==0){
//         let remainder = a%b;
//         a = b;
//         b = remainder;
//     }
//     return a;
// }

// let gcd = findGCD(a,b);

// // FInd the LCM
// function findLCM(a,b,gcd){
//     let lcm = (a * b)/gcd
//     return lcm
// }

// console.log(findLCM(a,b,gcd));

//Print right angle triangle

// *
// **
// ***
// ****
// *****

// for(let i = 1 ; i<= n; i++){ //outer loop for rows
//     for(let j =1; j <=i; j++){ //inner loop for columns
//         process.stdout.write("*");
//     }
//     console.log()
// }

// Downward triangle star pattern
// *****
// ****
// ***
// **
// *

// for(let i = n; i>=1; i--){ // outer loop for rows
//     for(let j =1; j <=i; j++){ // inner loop for columns
//         process.stdout.write("*");
//     }
//     console.log()
// }

// let n = 5;

// for (let row = 0; row < n; row++) {

//     // Print spaces
//     for (let space = 0; space < n - row - 1; space++) {
//         process.stdout.write(" ");
//     }

//     // Print stars
//     for (let star = 0; star < 2 * row + 1; star++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

//Diamond Pattern

// let n = 7;

// for (let row = 0; row < n; row++) {
//   //print spaces
//   for (let space = 0; space < n - row - 1; space++) {
//     process.stdout.write(" ");
//   }

//   //print stars
//   for (let star = 0; star < 2 * row + 1; star++) {
//     process.stdout.write("*");
//   }

//   console.log("");
// }

// for (let row = n - 2; row >= 0; row--) {

//     // Spaces
//     for (let space = 0; space < n - row - 1; space++) {
//         process.stdout.write(" ");
//     }

//     // Stars
//     for (let star = 0; star < 2 * row + 1; star++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

let n = 8 ;

for (let row = 0; row < n; row++) {
    let pattern = "";

    for (let col = 0; col < n; col++) {
        if (row === col || row + col === n - 1) {
            pattern += "* ";
        } else {
            pattern += "  ";
        }
    }

    console.log(pattern);
}
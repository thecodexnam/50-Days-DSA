// // Find GCD of two numbers

// let a = 18;
// let b = 36;

// function findGCD(a,b){
//     while(b !== 0 && a !==0){
//         let remainder = a%b; // remainder = 38%15 = 8
//         a = b; // a = 38
//         b = remainder; // b = 15
//     }
//     return a;
// }

// let gcd = findGCD(a,b);
// console.log(gcd); // 6

// FFind the LCM
// function findLCM(a,b,gcd){
//     let lcm = (a * b)/gcd
//     return lcm;
// }

// console.log(findLCM(10,20,10)) // 20;

//Print right angle triangle

// *
// **
// ***
// ****
// *****

// let num = 5;

// for(let i=1;i<=num;i++){
//   for(let j=1; j<=i;j++){
//     process.stdout.write("*")
//   }
//   console.log()
// }

// Downward triangle star pattern
// *****
// ****
// ***
// **
// *

// let num =5;

// for(let i = num; i >=1; i--){
//   for(let j=1;j<=i;j++){
//     process.stdout.write("*")
//   }
//   console.log()
// }

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let num = 6;

// for (let i = 1; i <= num; i++) {
//   let rows = "";

//   //Spaces
//   for (let j = 1; j < i; j++) {
//     rows += " ";
//   }

//   //stars           //5 -1 +1 =
//   for (let j = 1; j < num - i + 1; j++) {
//     rows += "*";
//   }
//   console.log(rows);
// }

//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *

let num = 4;

//Upper side
for (let i = 1; i <= num; i++) {
  let rows = "";

  //spaces
  for (let j = num; j > i; j--) {
    rows += " ";
  }

  //star
  for (let j = 1; j <= 2 * i - 1; j++) {
    rows += "*";
  }
  console.log(rows);
}

//Lower side
for (let i = 1; i <= num; i++) {
  let rows = "";

  //spaces
  for (let j = 1; j <i; j++) {
    rows += " ";
  }

  //star
  for (let j = 1; j <= 2 * (num -i) +1; j++) {
    rows += "*";
  }
  console.log(rows);
}

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

// let n = 8 ;

// for (let row = 0; row < n; row++) {
//     let pattern = "";

//     for (let col = 0; col < n; col++) {
//         if (row === col || row + col === n - 1) {
//             pattern += "* ";
//         } else {
//             pattern += "  ";
//         }
//     }

//     console.log(pattern);
// }

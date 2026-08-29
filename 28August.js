//Diamond number pattern

//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1

// let num = 5;

// //Upper pyramid
// for (let rows = 1; rows <= num; rows++) {
//   let row = "";

//   //print spaces
//   for (let i = 0; i <= num - rows - 1; i++) {
//     //
//     row += " ";
//   }

//   //increasing
//   for (let i = 1; i <= rows; i++) {
//     row += i;
//   }

//   //decreasing
//   for (let i = rows - 1; i >= 1; i--) {
//     row += i;
//   }
//   console.log(row);
// }

// //Lower Pyramid
// for (let rows = num - 1; rows >= 1; rows--) {
//   let row = "";

//   //print spaces
//   for (let i = 0; i <= num - rows - 1; i++) {
//     row += " ";
//   }

//   //increasing
//   for (let i = 1; i <= rows; i++) {
//     row += i;
//   }

//   //decreasing
//   for (let i = rows - 1; i >= 1; i--) {
//     row += i;
//   }
//   console.log(row);
// }

//Butterfly half pattern
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *

// let num = 5;

// for (let rows = 1; rows <= num; rows++) {
//   let row = "";

//   //print stars
//   for(let i = 1; i<=rows;i++){
//     row+="*"
//   }

//   //print space
//   for(let i = 2*num-2; i>=1;i-=2){
//     row+=" ";
//   }

//   //print stars
//   for(let i = 1; i<=rows;i++){
//     row+="*"
//   }
//   console.log(row)
// }


let num = 5;

for (let rows = 1; rows <= num; rows++) {
  let row = "";

  // left stars
  for (let i = 1; i <= rows; i++) {
    row += "*";
  }

  // spaces
  for (let i = 2 *(num-rows); i >= 1; i --) {
    row += " ";
  }

  // right stars
  for (let i = 1; i <= rows; i++) {
    row += "*";
  }

  console.log(row);
}
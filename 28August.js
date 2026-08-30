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

//Upper half
// let num = 5;

// for (let rows = 1; rows <= num; rows++) {
//   let row = "";

//   //print stars
//   for (let i = 1; i <= rows; i++) {
//     row += "*";
//   }

//   //print space
//   for (let i = 2 * (num - rows); i >= 1; i--) {
//     row += " ";
//   }

//   //print stars
//   for (let i = 1; i <= rows; i++) {
//     row += "*";
//   }
//   console.log(row);
// }

// // Lower Half
// for (let rows = num - 1; rows >= 1; rows--) {
//   let row = "";

//   // Left stars
//   for (let i = 1; i <= rows; i++) {
//     row += "*";
//   }

//   // Spaces
//   for (let i = 2 * (num - rows); i >= 1; i -= 2) {
//     row += "  ";
//   }

//   // Right stars
//   for (let i = 1; i <= rows; i++) {
//     row += "*";
//   }

//   console.log(row);
// }

//

// *****
//  * *
//   *
//  * *
// *****

//Hollow hourglass 

let num = 5;

for (let i = 0; i < num; i++) {
  
  //print left spaces
  let spaces = 0;

  if (i < Math.floor(num / 2)) {
    spaces = i;
  } else {
    spaces = num - i - 1;
  }

  //print spaces
  for (j = 0; j < spaces; j++) {
    process.stdout.write(" ");
  }

  //print stars
  if (i === 0 || i === num - 1) {
    for (let j = 0; j < num; j++) {
      process.stdout.write("*");
    }
  } else if (i === Math.floor(num / 2)) {
    process.stdout.write("*");
  } else {
    process.stdout.write("*");

    //print side spaces
    let insidespace = num-2*spaces-2

    for(let j =0; j< insidespace;j++){
      process.stdout.write(" ");
    }
    process.stdout.write("*")
  }
  console.log()
}

//Number Changing pyramid

// 1
// 12
// 123
// 1234
// 12345



//outer loop
// for (let i = 1; i <= num; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

//Fibonacci pyramid pattern

//         0
//       1 1
//     2 3 5
//   8 13 21 34
// 55 89 144 233 377

let num =5;

let first = 0;
let second = 1;

for(let rows=0; rows<num;rows++){
    let row = "";

    //print spaces;
    for(let i =0; i<num-rows-1;i++){
        row+=" "
    }

    //Print Fibonacci numbers
   for(let i=0; i<=rows;i++){
    row += first +" ";

    let next = first + second; // 
    first = second; // 
    second = next; 
   }

   console.log(row);
}

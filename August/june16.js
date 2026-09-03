// // Find the year is leap or not

const { ImLab } = require("react-icons/im");

// let year = 2024 ; // Leap year

// if(year % 400 == 0 || (year % 4 == 0 && year% 100 !=0)){
//     console.log("Leap year")
// }
// else{
//     console.log("Non Leap Year")
// }


// //

// for(let i =0 ; i<=10; i++){
//     console.log(i)
// }

//
// let j =0;

// while(j<20){
//     console.log(j*j);
//     j++;
// }

// let i =7;

// do{
//     console.log(i)
//     i++
// }while(i <2)

// Program to find the number is odd or even


// let i = 9;

// if(i% 2 !=0){
//     console.log("Even")
// }
// else{
//     console.log("odd")
// }

// Program to find factorial

// let num = 5;
// let fact =1;

// for(let i = 1; i<=num ; i++){
//    fact *=i;
// }

// console.log(fact);

// Program to find the prime number

let num = 9;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Prime Number");
} else {
    console.log("Not a Prime Number");
}



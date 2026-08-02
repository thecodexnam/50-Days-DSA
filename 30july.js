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

let n =5

// for(let i = 1 ; i<= n; i++){
//     for(let j =1; j <=i; j++){
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

for(let i = n; i>=1; i--){
    for(let j =1; j <=i; j++){
        process.stdout.write("*");
    }   
    console.log()
}
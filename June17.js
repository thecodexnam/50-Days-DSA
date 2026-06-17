// Check if a number is prime or not in root(N) iterations

// let num = 7;
// let isPrime = true;

// function CheckPrimeRoot(num) {
//   if (num <= 1) {
//     isPrime = false;
//   } else {
//     for (let i = 2; i <= num; i++) {
//       if (num % 2 === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//   }
// }

// CheckPrimeRoot(num);

//   if(isPrime){
//     console.log("It is Prime Number")
//   }
//   else{
//     console.log("It is not a Prime Number");
//   }

// Print all prime numbers less than N

let N = 20;

for (let num = 2; num < N; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

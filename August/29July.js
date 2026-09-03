// Rotate a Number By K Positions

//12345678

function rotateByK(num,k){ // k=2
    // Count digits
    let temp = num
    let totalDigit = 0;

    while(temp > 0){
        totalDigit++; //1-2-3-4-5-6
        temp = Math.floor(temp/10)// 
    }

    // Normalize by k
    k = k % totalDigit;
    if(k < 0){
        k+= totalDigit;
    }

    // create Divisor & Multiplier
    let divisor = 1;
    let multiplier = 1;

    for(let i =1; i<= totalDigit; i++){ // 1-2-3-4-5-6
        if(i <=k){ //1
            divisor *= 10; // 10 - > 100
        }
        else{
            multiplier *= 10; // 10 -> 100 -> 1000 -> 10000
        }
    }

    let remainder = num % divisor; // 123456/100 - > 56
    let quotient = Math.floor(num/divisor); // 123456/100 - 1234

    //join
    return remainder * multiplier + quotient;

}

let a = rotateByK(123,2); //561234
console.log(a)

// function rotateByK(num, k) {
//     // Count digits
//     let temp = num;
//     let totalDigits = 0;

//     while (temp > 0) {
//         totalDigits++;
//         temp = Math.floor(temp / 10);
//     }

//     // Normalize k
//     k = k % totalDigits;

//     if (k < 0) {
//         k += totalDigits;
//     }

//     // Create divisor & multiplier
//     let divisor = 1;
//     let multiplier = 1;

//     for (let i = 1; i <= totalDigits; i++) {
//         if (i <= k) {
//             divisor *= 10;
//         } else {
//             multiplier *= 10;
//         }
//     }

//     // Split the number
//     let remainder = num % divisor;
//     let quotient = Math.floor(num / divisor);

//     // Join
//     return remainder * multiplier + quotient;
// }

// console.log(rotateByK(12345678, 4)); // 56781234
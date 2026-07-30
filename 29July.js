// Rotate a Number By K Positions

function rotateByK(num, k) {
    // Count digits
    let temp = num;
    let totalDigits = 0;

    while (temp > 0) {
        totalDigits++;
        temp = Math.floor(temp / 10);
    }

    // Normalize k
    k = k % totalDigits;

    if (k < 0) {
        k += totalDigits;
    }

    // Create divisor & multiplier
    let divisor = 1;
    let multiplier = 1;

    for (let i = 1; i <= totalDigits; i++) {
        if (i <= k) {
            divisor *= 10;
        } else {
            multiplier *= 10;
        }
    }

    // Split the number
    let remainder = num % divisor;
    let quotient = Math.floor(num / divisor);

    // Join
    return remainder * multiplier + quotient;
}

console.log(rotateByK(12345678, 4)); // 56781234
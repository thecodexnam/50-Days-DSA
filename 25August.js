//Print star diagonals pattern

// let num=5;

// for(let rows=0; rows<num;rows++){
//     let line = "";
//     for(let col =0; col < num; col++) {
//         if(rows === col || rows + col === num-1){
//             line += "*";
//         }
//         else{
//             line+=" "
//         }
//     }
//     console.log(line)
// }

//Hollow diamond pattern
let n = 4;

// Upper half
for (let i = 0; i < n; i++) {
    let row = "";

    // Spaces before stars
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }

    // Stars and spaces inside
    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}

// Lower half
for (let i = n - 2; i >= 0; i--) {
    let row = "";

    // Spaces before stars
    for (let j = 0; j < n - i - 1; j++) {
        row += " ";
    }

    // Stars and spaces inside
    for (let j = 0; j < 2 * i + 1; j++) {
        if (j === 0 || j === 2 * i) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
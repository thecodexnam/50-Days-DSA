//Hollow diamond pattern

//before printing hallow diamond pattern i print normal diamond pattern

let num = 5;


//Uppper side
for(let row=0;row<num;row++){
    let rows = "";

    // Print Spaces before stars
    for(let i =0; i< num - row -1; i++){
        rows += " ";
    }

    //print stars
    for(let i = 0; i < row*2 +1; i++){
        if(i == 0 || i == row*2){
            rows += "*"
        }
        else{
            rows += " "
        }
    }
    console.log(rows);
}

//lower side

for(let row = num-2; row >= 0; row--){
    let rows = "";

    //print spaces before stars
    for(let spaces = 0; spaces < num-row-1; spaces++){
        rows+=" "
    }

    //print stars 
    for(let i =0; i<row*2+1; i++){
        if(i == 0 || i == row*2){
            rows += "*"
        }
        else{
            rows += " "
        }
    }
    console.log(rows)
}
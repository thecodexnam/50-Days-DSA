// program to find leap year

let year = 2002;

if(year % 400 == 0 || (year %4 ==0 && year != 0)){
    console.log("This is leap year");
}
else{
    console.log("This is not a Leap Year")
}
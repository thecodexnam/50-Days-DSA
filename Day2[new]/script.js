//Remove Duplicates (Sorted Array)


function RemoveDuplicate(arr){
    let i =0;

    for(let j=1; j <arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j]
        }
    }
    return i+1;
}

let arr = [1,1,1,2,2,4,4,5,2,6,3,5,5]
let length = RemoveDuplicate(arr);

console.log(arr.slice(0,length));

// function removeDuplicates(arr) {
//     let i = 0;

//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1; // new length
// }

// let arr = [1,1,2,2,3,4,4];
// let length = removeDuplicates(arr);

// console.log(arr.slice(0, length));



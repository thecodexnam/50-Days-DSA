// Find the smalllest element of an Array

let arr1 = [2,4,8,4,9,3,1,5];

function FindMinelement(arr){
    let minimum = arr[0];

    for(let i=0; i<arr1.length;i++){
        if(arr1[i]<minimum){
            minimum = arr[i]
        }
    }
    return minimum;
}

console.log("smallest Value is: ",FindMinelement(arr1));

// Find the largest element of an Array

// let arr = [10,32,43,54,8,63,2,4];

// function FindMax(arr){
//     let maximum = arr[0];

//     for(let i=0; i< arr.length; i++){
//         if(arr[i]>maximum){
//             maximum = arr[i];
//         }
//     }
//     return maximum;
// }

// console.log("Largest Value is: ",FindMax(arr));







//Reverse an array of element

// let arr = [10,20,30,40,50]; // Length of an array - 5 - 0->1->2->3->4

// function ReverseArray(arr){
//     let left = 0;
//     let right = arr.length-1; //4
//         // 1      //3
//     while(left < right){
//         // Swap elements at left and right positions
//         // This is the "swap trick" - remember this!
//         let temp = arr[left] // Save Left Value 
//         arr[left]= arr[right]; // Put right value on Left 
//         arr[right]=temp; // Put Saved left value in right

//         //Move Pointer closer
//         left++;
//         right--;
//     }
//     return arr;
// }

// console.log(ReverseArray(arr));



//Reverse this array using two pointer

let arr = [10,20,30,40,50,60,70] ; //70,60,50,40,30,20,10

function reverseArray(arr){
    let left = 0;
    let right = arr.length-1;

    while(left <right){
        let temp = arr[right]
        arr[left] = arr[right];
        arr[right]=temp;

        //move pointer
        left++;
        right--;
    }
    return arr;
}

console.log(arr);
console.log(reverseArray(arr));
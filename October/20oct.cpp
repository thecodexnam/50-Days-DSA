#include <iostream>
using namespace std;


//combined two sorted array
int main()
{
    int arr1[] = {1, 3, 6};
    int arr2[] = {2, 5, 7};
    int length = sizeof(arr1)/sizeof(arr1[0]) + sizeof(arr2)/sizeof(arr2[0]);
    cout<<length;

    int left = 0;
    int right = 1;

    while(left<length-1){
        if(arr1[left] > arr2[right]){
            int temp = arr1[left];
            arr1[left] = arr2[right];
            arr1[right] = temp;
        }
        right++;

        if(right == length){
            left++;
            right = left+1;
        }
    }

    for(int k = 0; k< length; k++){
        cout<<arr1[k]<<","<<endl;
    }

}

// //sort array
// int main(){
//     int arr[] = {2,6,4,1,8};
//     int length  = sizeof(arr)/sizeof(arr[0]);

//     int left = 0;
//     int right = 1;

//     while(left<length-1){
//         if(arr[left] > arr[right]){
//             int temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//         }
//         right++;

//         if(right == length){
//             left++;
//             right = left+1;
//         }
//     }

//     for(int k =0; k< length; k++){
//         cout<<arr[k]<<", ";
//     }

// }
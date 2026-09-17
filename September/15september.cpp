#include <iostream>
using namespace std;

//find the two sum elements in array using two pointer approach

int main(){
    int arr[] = {10,32,41,51,67};
    int target = 92;

    int left = 0;
    int right = sizeof(arr)/sizeof(arr[0])-1;

    while(left<right){
        int sum = arr[left]+arr[right];

        if(sum == target){
            cout << "sum of "<<arr[left]<<" and "<<arr[right]<<" is "<<target<<endl;
            return 0;
        }
        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }
return 0;
}

// int main(){
//     //find the number of elements in an array that return 6 when added together
//     int a[] = {1,2,3,4,5};

//     for(int i =0; i<5;i++){
//         for(int j = i+1;j<5;j++){
//             if(a[i]+a[j]==6){
//                 cout<<"The number of elements that return 6 when added together are: "<<a[i]<<" and "<<a[j]<<endl;
//             }
//         }
//     }
//     return 0;
// }
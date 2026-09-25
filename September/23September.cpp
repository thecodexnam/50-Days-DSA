#include <iostream>
using namespace std;

int main()
{
    int arr[] = {1, 1, 1, 2, 2, 3, 3, 4, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    int i = 0;

    for(int j = 1; j<size; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    int uniqueElement = i +1;

    for(int k =0; k < uniqueElement; k++){
        cout<<arr[k]<<" ";
    }



}
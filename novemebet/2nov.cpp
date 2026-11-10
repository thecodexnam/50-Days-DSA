#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr = {-10, -4, -1, 2, 5, 7};

    for(int i =0; i<arr.size();i++){
        arr[i]*= arr[i];
    }

    for(int k=0; k<arr.size();k++){
        cout<<arr[k]<<", ";
    }

    vector<int> a;
    vector<int> b;

    for (int i = 0; i < arr.size(); i++)
    {
        if(arr[i]>=0){ //positve 
            b.push_back(arr[i]);
        }
        else{
            a.push_back(arr[i]); //negative
        }
    }

    for(int k =0; k< b.size();k++){
        cout<<b[k]<<", "<<endl;
    }
}


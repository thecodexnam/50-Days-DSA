#include <iostream>
using namespace std;

int factorial(int a){
    int res = 1;
    for(int i = 1; i<= a;i++){
        res*=i;
    }
    return res;
}

int main(){
    int a ;
    cout<<"Enter Number";
    cin>>a;

    cout<<factorial(a);
}
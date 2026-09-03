#include <iostream>
using namespace std;

//find the Frequency of a digit
int FindFrequency(int num, int d){
    int c=0;

    while(num>0){
        if(num%10 == d){
            c++;
        }
        num = num/10;
    }
    return c;
}

int main(){
    int num = 312453363;
    int d = 3;
    // cout<<FindFrequency(num,d);

    char a = "10";
    int b = 7;

    if(a>b){
        cout<<"a is greater";
    }
    else{
        cout<<"b is greater";
    }
    
    return 0;

}
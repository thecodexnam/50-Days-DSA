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
    cout<<FindFrequency(num,d);
    
    return 0;
}
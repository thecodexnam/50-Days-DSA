#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Convert 1000 to base 16

string findhexa(int num){
    string digit = "0123456789ABCDEF";
    string val ="";

    while(num>0){
        int remainder = num%16;
        val+= digit[remainder];
        num = num / 16;
    }

    reverse(val.begin(), val.end());

    return val;
}

int main(){
    int num = 1000;
    cout<<findhexa(num)<<endl;
    return 0;
}



//Convert 100 to Base 8

// string findbase(int num){
//     string val = "";

//     while(num>0){
//         int remainder = num%8;

//         val+= to_string(remainder);
//         num = num /8;
//     }

//     reverse(val.begin(),val.end());

//     return val;
// }

// int main(){
//     int num = 1000;
//     cout<< findbase(num)<<endl;

//     return 0;
// }

//Convert Decimal 25 to Binary (base 2)

// string findBinary(int a){
//     string val ="";

//     while(a>0){
//         int remainder = a % 2;

//         val += to_string(remainder);
        
//         a = a/2;
//     }

//     reverse(val.begin(), val.end());

//     return val;

// }

// int main(){

//     int num = 25;
//     cout << findBinary(num) << endl;

//     return 0;
// }
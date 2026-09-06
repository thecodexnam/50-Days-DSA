#include <iostream>
using namespace std;
#include <cmath>

// int finddecimalbase(int num, int base){
//     int result = 0;
//     int power =0;

//     while(num>0){
//         int digit = num % 10;

//         result = result + digit * pow(base,power);

//         power++;

//         num = num/10;
        
//     }
//     return result;
// }

// int main(){
//     int num = 1011;
//     int base = 2;
//     cout<<finddecimalbase(num,base);

// }


//Convert any base to decimal base (Use integers as inputs)

#include <iostream>
using namespace std;

long long factorial(int n) {
    long long result = 1;

    for (int i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

int main() {
    int n, r;

    cout << "Enter n and r: ";
    cin >> n >> r;

    long long nCr = factorial(n) / (factorial(r) * factorial(n - r));

    cout << "nCr = " << nCr;

    return 0;
}
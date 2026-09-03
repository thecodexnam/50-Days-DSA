#include <iostream>
using namespace std;

void frequency(int n) {
    int freq[10] = {0};

    // Count frequency of each digit
    while (n > 0) {
        int digit = n % 10;
        freq[digit]++;
        n = n / 10;
    }

    // Display frequency
    for (int i = 0; i < 10; i++) {
        if (freq[i] > 0) {
            cout << "Digit " << i << " occurs "
                 << freq[i] << " times" << endl;
        }
    }
}

int main() {
    int n;

    cout << "Enter a number: ";
    cin >> n;

    frequency(n);

    return 0;
}
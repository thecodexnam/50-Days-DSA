
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 1, 2, 2, 3, 4, 4, 5};
    int n = 8;

    if (n == 0) {
        return 0;
    }

    int i = 0;

    for (int j = 1; j < n; j++) {
        if (arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    // Unique elements occupy indices 0 through i.
    for (int k = 0; k <= i; k++) {
        cout << arr[k] << " ";
    }

    return 0;
}

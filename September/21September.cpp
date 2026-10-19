#include <iostream>
#include <vector>
using namespace std;

// Given an array arr[] consisting of only 0's and 1's. Modify the array in-place to segregate 0s onto the left side and 1s onto the right side of the array.
void segerate(vector<int>& arr)
{
    int left = 0;
    int right = static_cast<int>(arr.size()) - 1;

    while (left < right)
    {
        while (left < right && arr[left] == 0)
        {
            left++;
        }
        while (left < right && arr[right] == 1)
        {
            right--;
        }

        if (left < right)
        {
            swap(arr[left],arr[right]);
            left++;
            right --;
        }
    }
}

int main()
{
    vector<int> arr = {1, 0, 1, 0, 0, 1, 1, 0};
    segerate(arr);

    for (int value : arr)
    {
        cout << value << ' ';
    }
}
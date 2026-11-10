#include <iostream>
using namespace std;

int main()
{
    int arr1[] = {1, 3, 5, 7};
    int arr2[] = {2, 4, 6, 8};
    int n = sizeof(arr1) / sizeof(arr1[0]);
    int m = sizeof(arr2) / sizeof(arr2[0]);
    int res[n + m];

    int i = 0;
    int j = 0;
    int id = 0; // its used to handle res array

    while (i < n && j < m)
    {
        if (arr1[i] <= arr2[j])
        {
            res[id] = arr1[i];
            id++;
            i++;
        }
        else
        {
            res[id] = arr2[j];
            id++;
            j++;
        }
    }

    while (j < m)
    {
        res[id] = arr2[j];
        id++;
        j++;
    }

    while (i < n)
    {
        res[id] = arr1[i];
        id++;
        i++;
    }

    for (int k = 0; k < m + n; k++)
    {
        cout << res[k] << ",";
    }
}
#include <iostream>
using namespace std;

int main(){
    int num = 5;

    //right left triangle pattern

    for(int i=0;i<num;i++){
        for(int j=0;j<=num;j++){
            if(j<=num-i-1){
                cout<<" ";
            }
            else{
                cout<<"*";
            }
        }
        cout<<endl;
    }

    // for(int i =num; i>0; i--){
    //     for(int j = 0; j<i;j++){
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }
    
    // for(int i =0;i< num; i++){
    //     for(int j = 0; j<i;j++){
    //         cout<<"*";
    //     }
    //     cout<<endl;
    // }
}

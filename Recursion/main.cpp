#include <iostream>
#include <bits/stdc++.h>
#include <vector>

using namespace std;

vector<int> rec(int n){
    if(n==0){
        vector<int> vec(1);
        vec[0] = 0;
        return vec;
    }
    if(n==1){
        vector<int> vec(2);
        vec[0] = 0;
        vec[1] = 1;
        return vec;
    }

    vector<int> vec = rec(n-1);
    vec.push_back(vec[n-1]+vec[n-2]);

    return vec;

}

int main(){
    vector<int> result = rec(4);
    for(int i=0;i<result.size();i++){
        cout << result[i] << " ";
    }
}
function iterationFib(number){
    fibList = [];
    fibList[0]  = 0;
    fibList[1] = 1;

    for(let i=2; i<number;i++){
        fibList[i] = fibList[i-1]+fibList[i-2];
    }
    return fibList;
}

function recursiveFib(n){
    if(n=== 0){
        return [0];
    }
    if(n === 1){
        return [0,1];
    }

    const arr = recursiveFib(n-1);
    arr.push(arr[n-1]+arr[n-2]);
    return arr;
}

console.log(recursiveFib(4));


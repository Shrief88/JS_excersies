// 1. Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

// 2. Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

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


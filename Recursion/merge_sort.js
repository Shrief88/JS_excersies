function merge (array1 , array2){
    let n = array1.length + array2.length;
    let mergedList = [];
    let ptr1 = 0;
    let ptr2 = 0;
    for(let i=0;i<n;i++){
        if(!array1[ptr1]){
            array1[ptr1]= Number.MAX_VALUE;
        }
        if(!array2[ptr2]){
            array2[ptr2] = Number.MAX_VALUE;
        }

        if(array1[ptr1]<array2[ptr2]){
            mergedList.push(array1[ptr1]);
            ptr1++;
        }else{
            mergedList.push(array2[ptr2]);
            ptr2++;
        }
    }
    return mergedList;
}


function mergeSort(array){
    if(array.length === 1 || array.length === 0){
        return array;
    }

    let middle = Math.floor(array.length / 2);
    const leftSide = array.slice(0,middle);
    const rightSide = array.slice(middle,array.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
   
}






console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));
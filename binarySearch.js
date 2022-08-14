function binarySearch(array,value){
    if(array.length === 0){
        return -1;
    }
    
    let middle = Math.floor((array.length/2));
   
    if(array[middle] === value){
        return middle;
    }else if(array[middle]>value){
        const leftSide = array.slice(0,middle-1);
        return binarySearch(leftSide,value);
    }else if(array[middle]<value){
        const rightSide = array.slice(middle+1,array.length);
        return (array.length - rightSide.length)+binarySearch(rightSide,value);
    }
}


function binarySearchIterative(array,value){
    let start =0;
    let end = array.length - 1;
    
    while(end >= start){
        let middle = Math.floor((start+end)/2);
        if(array[middle] === value){
            return middle;
        }else if(array[middle]>value){
            end = middle-1;
        }else if(array[middle]<value){
            start = middle+1;
        }
    }
    return -1;
}

console.log(binarySearchIterative([2,4,10,12,20,34,100],34));
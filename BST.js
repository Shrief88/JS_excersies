class Node{
    constructor(value,left=null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(array){
        array.sort((a,b)=>a-b);
        let uniqueChars = [...new Set(array)];

        let node = new Node();
        node = this.buildTree(uniqueChars);
        this.root = node;
    }


    buildTree(array,start=0,end=array.length-1){
        if(start > end){
            return null;
        }
    
        let middle = Math.floor((start+end)/2);
        const node = new Node(array[middle]);
        
        node.left = this.buildTree(array,start,middle-1);
        node.right = this.buildTree(array,middle+1,end);
        return node;
    }
}






const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(tree);
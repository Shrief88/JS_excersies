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

    insert(value,node=this.root){
        if(value > node.value){
            if(node.right === null){
                const newNode = new Node(value);
                node.right = newNode;
                
            }else{
                this.insert(value,node.right);
            }
        }else{
            if(node.left === null){
                const newNode = new Node(value);
                node.left = newNode;
            }else{
                this.insert(value,node.left);
            } 
        }
    }

    find(value,node=this.root){
        if(node === null){
            return -1;
        }

        if(node.value === value){
            return node;
        }

        if(value > node.value){
            return this.find(value,node.right);
        }else{
            return this.find(value,node.left);
        } 
    }

    height(node){
        if(node === null){
            return -1;
        }

        if(root === null){
            throw Error('Node is not Found');
        }

        return 1 + Math.max(this.height(node.right),this.height(node.left));
    }

    depth(node,root = this.root){
        if(root === node){
            return 0;
        }

        if(root === null){
            throw Error('Node is not Found');
        }

        if(node.value > root.value){
            return 1+ this.depth(node,root.right)
        }else{
            return 1+ this.depth(node,root.left);
        }
    }
}






const tree = new Tree([1, 2,4,5,6,7]);
const node = tree.find(2);


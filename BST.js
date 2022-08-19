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

        this.preOrderData = [];
        this.inOrderData = [];
        this.postOrderData = [];
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

    levelOrder(root=this.root){
        let result = [];
        let queue = [];

        queue.push(root);

        while(!(queue.length === 0)){
            result.push(queue[0].value);
            if(!(queue[0].left === null)) queue.push(queue[0].left);
            if(!(queue[0].right === null)) queue.push(queue[0].right);
            queue.shift();
        }

        return result;
    }


    preOrder(root=this.root,preOrderData=this.preOrderData){
        if(root === null){
            return;
        }
        preOrderData.push(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
        return preOrderData;
    }

    inOrder(root=this.root,inOrderData=this.inOrderData){
        if(root === null){
            return;
        }
        this.inOrder(root.left);
        inOrderData.push(root.value);
        this.inOrder(root.right);
        return inOrderData;
    }

    postOrder(root=this.root,postOrderData=this.postOrderData){
        if(root === null){
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        postOrderData.push(root.value);
        return postOrderData;
    }



    // delete(node,root = this.root){
    //     if(root === null){
    //         throw Error('Node is not Found');
    //     }

    //     if(root === node){
    //        return null;
    //     }

    //     if(node.value > root.value){
    //         node.right =  this.delete(node,root.right)
    //     }else{
    //         node.left =  this.delete(node,root.left);
    //     }

    //     return root;
    // }
}






const tree = new Tree([1,2,3]);


console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.preOrder());



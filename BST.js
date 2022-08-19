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


    preOrder(root=this.root){
        if(root === null){
            return;
        }
        if(root === this.root){
            this.preOrderData = [];
        }
        this.preOrderData.push(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);

        return this.preOrderData;
    }

    inOrder(root=this.root){
        if(root === null){
            return;
        }
        if(root === this.root){
            this.inOrderData = [];
        }
        this.inOrder(root.left);
        this.inOrderData.push(root.value);
        this.inOrder(root.right);
        return this.inOrderData;
    }

    postOrder(root=this.root,postOrderData=this.postOrderData){
        if(root === null){
            return;
        }

        if(root === this.root){
            this.postOrderData = [];
        }

        this.postOrder(root.left);
        this.postOrder(root.right);
        this.postOrderData.push(root.value);
        return this.postOrderData;
    }

    isBalanced(root=this.root){
        if(root===null){
            return 0;
        }

        if( !(Math.abs(this.height(root.right) - this.height(root.left) <= 1))){
            return false;
        }

        return true;
    }

    reBalance(){
        const data = this.inOrder();
        node = this.buildTree(data);
        this.root = node;
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
console.log(tree.isBalanced());



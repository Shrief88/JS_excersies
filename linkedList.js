class Node{
    constructor(value=null,nextNode=null){
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList{
    constructor(){
        const head = new Node();
        this.head = head;
        this.size = 0;
    }
    
    getTail(){
        let lastNode = this.head;
        while(lastNode.nextNode !== null){
            lastNode = lastNode.nextNode;
        }
        return lastNode;
    }

    getHead(){
        return this.head.nextNode;
    }

    appendNode(value){
        const newNode = new Node(value);
        const lastNode = this.getTail();
        lastNode.nextNode = newNode;
        this.size++;
    }

    prepend(value){
        this.head.value = value;
        const newNode = new Node(null,this.head);
        this.head = newNode;
        this.size++;
    }

    getsize(){
        return this.size;
    }

    at(index){
        if(index>this.size-1){
            throw Error('index is bigger than the size');
        }
        let node = this.head;
        for(let i=0;i<=index;i++){
            node = node.nextNode;
        }
        return node;
    }

    insertAt(value, index){
        if(index>this.size){
            throw Error('index is bigger than the size');
        }
        let previousNode = this.head;
        for(let i=0;i<index;i++){
            previousNode = previousNode.nextNode;
        }
        const newNode = new Node(value,previousNode.nextNode);
        previousNode.nextNode = newNode;
    }

    removeAt(index){
        if(index>this.size-1){
            throw Error('index is bigger than the size');
        }
        let previousNode = this.head;
        for(let i=0;i<index;i++){
            previousNode = previousNode.nextNode;
        }
        let tmpNode = new Node(null,previousNode.nextNode.nextNode);
        previousNode.nextNode.nextNode = null;
        previousNode.nextNode = tmpNode.nextNode;
    }

    pop(){
        let node = this.head;
        while(node.nextNode.nextNode !== null){
            node = node.nextNode;
        }
        node.nextNode = null;
        this.size--;     
    }

    contains(value){
        let node = this.head;
        while(node !== null){
            if(node.value === value){
                return true;
            }
            node = node.nextNode;
        }
        return false;
    }

    find(value){
        let node = this.head.nextNode;
        for(let i=0;node !== null;i++){
            if(node.value === value){
                return i;
            }
            node = node.nextNode;
        }
        return null;
    }

    toString(){
        let node = this.head;
        let str = "";
        while(node !== null){
            node = node.nextNode;
            if(node === null){
                str += 'null';
            }else{
                str += `${node.value} -> `;
            }  
        }
        return str;
    }

   
}

const ll = new LinkedList();







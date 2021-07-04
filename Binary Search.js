class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else this.inserNode(this.root, newNode);
    }

    inserNode(root,node){

        if(node.data<root.data){
            if(root.left == null) root.left = node;
            else this.inserNode(root.left, node);
        }else{
             if(root.right == null) root.right = node;
            else this.inserNode(root.right, node);
        }
    }

    displayPreOrder(root){
        if(root !=null) {
            console.log(root.data);
            this.displayPreOrder(root.left);
            this.displayPreOrder(root.right);

        }
    }

    displayInOrder(root){
        if(root !=null) {
            this.displayInOrder(root.left);
            console.log(root.data);
            this.displayInOrder(root.right);

        }
    }

    search(root,data){
        if(root == null) return null;
        else if(root.data < data){
            return this.search(root.right, data);
         }else if(root.data > data){
            return this.search(root.left, data);
        }else{
            return root;
        }
    }

    displayPostOrder(root){
        if(root !=null) {
            this.displayPostOrder(root.left);
            this.displayPostOrder(root.right);
            console.log(root.data);
        }
    }

    findMin(root){
        if(root.left !=null) return this.findMin(root.left);
        else if(root.left == null) return root.data;  
    }

    findMinNode(root){
        if(root.left ==null) return root;
        else return this.findMinNode(root.left);  
    }

    remove(data){
        this.root = this.removeNode(this.root, data);

    }

    removeNode(root,data){

        if(root == null) return null;
        else if(data<root.data){
            root.left = this.removeNode(root.left, data);
            return root;
        }else if(data>root.data){
            root.right = this.removeNode(root.right, data);
            return root;
        }else{
            if(root.left == null && root.right == null){
                root = null;
                return root;
            }
            if(root.left == null){
                root = root.right;
                return root;    
            }
            else if(root.right == null){
                root = root.left;
                return root;
            }

            let tempNode = this.findMinNode(root.right);
            root.data = tempNode.data;
            root.right = this.removeNode(root.right,tempNode.data);
            return root;
        }
    }


}

On Fri, May 21, 2021 at 9:31 AM rahul gaur <rg4rahulgaur@gmail.com> wrote:
********** stack using QUEUE ************

class Stack{
    constructor(){
        this.mainQ = [];
        this.helperQ = [];
    }

    swapQueue(){
        let temp = this.mainQ;
        this.mainQ = this.helperQ;
        this.helperQ = temp;
    }


    push(data){
        if(this.mainQ.length === 0){
            this.mainQ.push(data);
        }else{
            this.helperQ.push(data);
            while(this.mainQ.length != 0){
                this.helperQ.push(this.mainQ.shift());
            }
            this.swapQueue();
        }
    }

    isEmpty(){
        return this.mainQ.length+this.helperQ.length === 0;
    }

    pop(){
        if(this.isEmpty()){
            return -1;
        }

        return this.mainQ.shift();
    }
}


***************QUEUE Using Stack *************

class Queue{
    constructor(){
        this.mainS = [];
        this.helperS = [];
    }

    isEmpty(){
        return this.mainS.length + this.helperS.length === 0;
    }

    enqueue(data){
        if(this.mainS.length != 0){
            this.helperS.push(this.mainS.pop());
        }
        this.mainS.push(data);
        while(this.helperS.length != 0){
            this.mainS.push(this.helperS.pop());
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return -1;
        }
        return this.mainS.pop();
    }

}

On Fri, May 21, 2021 at 8:33 AM rahul gaur <rg4rahulgaur@gmail.com> wrote:

******************************************************

Binary Search tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else this.inserNode(this.root, newNode);
    }

    inserNode(root,node){

        if(node.data<root.data){
            if(root.left == null) root.left = node;
            else this.inserNode(root.left, node);
        }else{
             if(root.right == null) root.right = node;
            else this.inserNode(root.right, node);
        }
    }

    displayPreOrder(root){
        if(root !=null) {
            console.log(root.data);
            this.displayPreOrder(root.left);
            this.displayPreOrder(root.right);

        }
    }

    displayInOrder(root){
        if(root !=null) {
            this.displayInOrder(root.left);
            console.log(root.data);
            this.displayInOrder(root.right);

        }
    }

    search(root,data){
        if(root == null) return null;
        else if(root.data < data){
            return this.search(root.right, data);
         }else if(root.data > data){
            return this.search(root.left, data);
        }else{
            return root;
        }
    }

    displayPostOrder(root){
        if(root !=null) {
            this.displayPostOrder(root.left);
            this.displayPostOrder(root.right);
            console.log(root.data);
        }
    }

    findMin(root){
        if(root.left !=null) return this.findMin(root.left);
        else if(root.left == null) return root.data;  
    }

    findMinNode(root){
        if(root.left ==null) return root;
        else return this.findMinNode(root.left);  
    }

    remove(data){
        this.root = this.removeNode(this.root, data);

    }

    removeNode(root,data){

        if(root == null) return null;
        else if(data<root.data){
            root.left = this.removeNode(root.left, data);
            return root;
        }else if(data>root.data){
            root.right = this.removeNode(root.right, data);
            return root;
        }else{
            if(root.left == null && root.right == null){
                root = null;
                return root;
            }
            if(root.left == null){
                root = root.right;
                return root;    
            }
            else if(root.right == null){
                root = root.left;
                return root;
            }

            let tempNode = this.findMinNode(root.right);
            root.data = tempNode.data;
            root.right = this.removeNode(root.right,tempNode.data);
            return root;
        }
    }


}
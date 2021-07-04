
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
   
}
class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    insertAtBegining(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAtLast(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    insertAt(data, p){
       
        if(p>this.length) return "Can't Possible";

        if(p==0) {this.insertAtBegining(data);return;}
        if(p== this.length) {this.insertAtLast(data);return;}
        else{
            let newNode = new Node(data);
            let diff = this.length-p;
            if(diff >= p){
                let ptr = this.head;
                for(let i=0;i<p;i++){
                    ptr = ptr.next;
                }
                newNode.prev = ptr;
                newNode.next = ptr.next;
                ptr.next = newNode;
                newNode.next.prev = newNode;
                this.length++;
            }else{
                let ptr = this.tail;
                for(let i=0;i<=diff;i++){
                    ptr = ptr.prev;
                }
                newNode.prev = ptr;
                newNode.next = ptr.next;
                ptr.next = newNode;
                newNode.next.prev = newNode;
                this.length++;
            }
           
        }

    }

    removeAtFirst(){
        if(this.head === null || this.head.next == null){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return true;
        }
       
    }

    removeAtLast(){
        if(this.head === null || this.head.next == null){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return true;
        }
       
    }


    display(){
        if(this.head ==null) return "Empty List";
        let ptr = this.head;
        let str = "";
        while(ptr!=null){
            str += ptr.data + " <=> ";
            ptr = ptr.next;
        }
        console.log(str);
    }
}
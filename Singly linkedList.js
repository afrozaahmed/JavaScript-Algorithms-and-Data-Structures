
class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    insertAtLast(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        }
        let ptr = this.head;
        while(ptr.next!=null){
            ptr = ptr.next;
        }
        ptr.next = newNode;
    }

    insertAtBegining(data){
        let newNode = new Node(data);
        if(this.head == null){
            this.head = newNode;
        }else{
            let ptr = this.head;
            newNode.next = ptr;
            this.head = newNode;
        }
       
    }

    removeAtBegining(){
        if(this.head == null || this.head.next == null) this.head= null;

        let ptr = this.head.next;
        this.head = null;
        this.head = ptr;

    }

    removeAtLast(){
        if(this.head == null || this.head.next == null) {
            this.head= null;
            return;
        }

        let ptr = this.head;
        while(ptr.next!=null && ptr.next.next !=null){
            ptr = ptr.next;
        }

        ptr.next = null;
       
    }

    print(){
        let ptr = this.head;
        if(ptr==null) console.log("Empty List")
        let str = "";
        while(ptr!=null){
            str += ptr.data + " -> ";
            ptr=ptr.next;
        }
        str += " null";
        console.log(str);
    }
}
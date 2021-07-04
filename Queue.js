class Queue{
    constructor(){
        this.list = [];
    }

    enqueue(data){
        this.list.push(data);
    }

    dequeue(){
        return this.list.shift();
    }

    show(){
        console.log(this.list);
    }

    front(){
        return this.list.length>0 ? this.list[0]: "Empty Queue";
    }

    Rear(){
        return this.list.length>0 ? this.list[this.list.length-1]: "Empty Queue";
    }

    isEmpty(){
        return this.list.length <1;
    }
}
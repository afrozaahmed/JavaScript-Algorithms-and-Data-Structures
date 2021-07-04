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
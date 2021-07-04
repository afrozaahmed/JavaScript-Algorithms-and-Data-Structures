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

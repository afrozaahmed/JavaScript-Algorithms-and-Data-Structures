class Stack{
    constructor(){
        this.list = [];
    }

    push(data){
        this.list.push(data);
    }

    pop(){
        return this.list.pop();
    }

    show(){
        console.log(this.list);
    }

    peek(){
        return this.list.length>0 ? this.list[this.list.length-1]: "Empty Queue";
    }

    isEmpty(){
        return this.list.length <1;
    }
}
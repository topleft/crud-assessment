function Stack(){
	this.items = [];    
}

function Queue (){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(item){
    this.stack1.items.push(item);
    console.log('In enqueue: '+this.stack1.items);
}

Queue.prototype.dequeue = function(){
    if (this.stack1.items.length !== 0 && this.stack2.items.length === 0){
        for (var i = 0; i < this.stack1.items.length; i++) {
            var item = stack1[i].items.pop();
            this.stack2.items.push(item);
        }
        var result = this.stack2.items.pop()
        console.log('Dequeue: '+result);
        return result;
    }
    else {
        var result = this.stack2.items.pop()
        console.log('Dequeue: '+result);
        return result;
    }
};

var q = new Queue();

q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();




function Node(value, nNode) {
  var node = Object();
  node.data = value;
  node.next = nNode ? nNode : null;
  // node.appendToTail = function(d) {
  //   var end = Node(d)
  //   var n = this;
  //   while(n.next !== null) {n = n.next;}
  //   n.next = end;
  // }
  return node;
}

function Stack() {
  return {
    top:null,
    pop: function() {
      if(this.top !== null) {
        var pop = this.top.data;
        this.top = this.top.next;
        return pop;
      } else {
        return null;
      }
    },
    push: function(item) {
      t = Node(item, this.top);
      this.top = t;
    }
  }
}

function Queue() {
  return {
    first: null,
    last: null,
    enqueue: function(item) {
      if(this.first === null) {
        this.last = Node(item);
        this.first = this.last;
      } else {
        this.last.next = Node(item);
        this.last = this.last.next;
      }
    },
    dequeue: function() {
      if(this.first !== null) {
        var dequeue = this.first.data;
        this.first = this.first.next;
        return dequeue;
      }
      return null;
    }
  }
}
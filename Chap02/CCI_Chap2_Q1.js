/* Write code to remove duplicates from an unsorted linked list.
  FOLLOW UP
  How would you solve this problem if a temporary buffer is not allowed? */

function Node(value, nNode) {
  var node = Object();
  node.data = value;
  node.next = nNode ? nNode : null;
  node.appendToTail = function(d) {
    var end = Node(d)
    var n = this;
    while(n.next !== null) {n = n.next;}
    n.next = end;
  }
  return node;
}

var linked = Node('a', Node('c', Node('d', Node('c', Node('d', Node('b', Node('e')))))));

// with another buffer
var removeLinkedDups = function(list) {
  var buffer = [list.data];
  var n = list;
  while(n.next != null) {
    if(buffer.indexOf(n.next.data) !== -1) {
      n.next = n.next.next;
    } else {
      buffer.push(n.next.data)
      n = n.next
    }
  }
  return list;
}

// compare to current node
var noBufRemoveLinkedDups = function(list) {
  var head = list;
  var current = head;

  while(current.next !== null) {
  var testParent = current
  var testing = current.next;
    // compare current to all
    while(testing.next !== null) {
      // if current.data === testing.data then testParent.next and testing = testing.next deleting testing original node
      if(current.data === testing.data) {
        testParent.next = testing.next;
        testing = testParent.next;
      // else testing becomes the parent and testing.next becomes testing.
      } else {
        testParent = testing;
        testing = testing.next;
      }
    }
    current = current.next;
  }
  return list;
}
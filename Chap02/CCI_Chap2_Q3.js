/* Implement an algorithm to delete a node in the middle of a single linked list, given
	only access to that node. */

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

// The main point of this problem is to take advantage of linkedlists in place deletion ability. 
// The detail about the middle node is just a distraction. 
function deleteMiddleGivenMiddle(node) {
	node.data = node.next.data;
	node.next = node.next.next;
}

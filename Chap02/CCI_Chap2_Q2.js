/* Implement an algorithm to find the nth to last element of a singly linked list. */

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

var linked1 = Node('a', Node('c', Node('d', Node('c', Node('d', Node('b', Node('e')))))));

findNthToLastNode = function(list, nth) {
	if(nth <= 0) {return null;}

	while(list !== null) {
		var countToLast = 0;
		move = list;

		while(move !== null && countToLast <= nth) {
			move = move.next
			countToLast++;
		}

		if(move === null && countToLast <= nth) {
			return list;			
		} else {
			list = list.next
		}
	}
}
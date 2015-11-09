/* Given a circular linked list, implement an algorithm which returns node at the 
	beginning of the loop.
	DEFINITION
	Circular linked list: A (corrupt) linked list in which a node’s next pointer points 
	to an earlier node, so as to make a loop in the linked list.
	EXAMPLE
	input: A -> B -> C -> D -> E -> C [the same C as earlier]
	output: C */
	// how can we check that a node is the exact same node we saw before? will === give the same exact node?

	// with buffer

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
  node.appendNodeToTail = function(end) {
  	var n = this;
  	while(n.next !== null) {n = n.next;}
  	n.next = end;
  }
  return node;
}

var linked = Node(2, Node(3, Node(6, Node(4))));
var cycle = Node(1, Node(5));

cycle.appendNodeToTail(cycle);
linked.appendNodeToTail(cycle);

var findCycle = function(linked) {
	cycleStart = null;
	buffer = [];
	while(linked.next != null) {
		if(buffer.indexOf(linked.next) === -1) {
			buffer.push(linked);
			linked = linked.next;
		} else {
			cycleStart = linked.next;
			break;
		}
	}
	return cycleStart;
}	

findCycle(cycle);
findCycle(linked);

// book implementation: two pointers meet
var twoPointerSpeeds = fucntion(linked) {
	var slower = linked;
	var faster = linked;

	
}
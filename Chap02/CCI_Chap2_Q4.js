/* You have two numbers represented by a linked list, where each node contains a single digit. 
	The digits are stored in reverse order, such that the 1’s digit is at the head of the list. 
	Write a function that adds the two numbers and returns the sum as a linked list.
	EXAMPLE 
	Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
	Output: 8 -> 0 -> 8 */

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

	var linkedSum = function(linked1, linked2) {
		var carry = 0;
		var head = linked1;
		while(linked1 !== null || linked2 !== null) {
			if(linked1 === null) {
				linked1.next = linked2.next;
				linked1.data += carry;
				break;
			} else if(linked2 === null) {
				linked1.data += carry;
				break;
			} else {
				linked1.data += linked2.data;
				if(linked1.data >= 10) {
					carry = 1;
					linked1.data = linked1.data % 10;
				} else {
					carry = 0;
				}
				linked1 = linked1.next;
				linked2 = linked2.next;
			}
		}
		return head;
	}

var linked1 = Node(1, Node(6, Node(4, Node(2, Node(9, Node(1, Node(8)))))));
var linked2 = Node(3, Node(1, Node(5, Node(2, Node(0, Node(7))))));




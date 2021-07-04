const L = require('../linkedlist/index');
const LinkedList = L.LinkedList;
const Node = L.Node;


const l = new LinkedList();
//expect(l.getAt(10)).toEqual(null);

l.insertLast(12);
l.insertLast(2);
l.insertLast(31);
l.insertLast(49);
l.insertLast(49);
l.insertLast(97);
l.insertLast(66);
l.insertLast(9);
l.insertLast(10);
l.insertLast(75);
l.insertLast(100);
printList(l.head);
//printList(mergeSort(l.head));


function printList(head){
        while (head != null) {
            process.stdout.write(head.data + " -> ");
            head = head.next;
        }console.log()

}

function mergeSort(l){
   
    if(l === null || l.next == null) return l;

    let middle = getMiddle(l);
    let nextTomiddle = middle.next;
    middle.next = null;

    let left = mergeSort(l);
    let right = mergeSort(nextTomiddle);
  //------------- single nodes  

    return merge(left, right);
    
}

function getMiddle(l){
    if (l == null)
            return l;
 
        let slow = l, fast = l;
 
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
}

function merge(l1,l2){
    let mergeNode =new LinkedList();
    mergeNode.head = new Node(-1);
    let currentNode = mergeNode.head;

    let left = l1, right = l2;
    while(left !=null && right != null){
        
        let lData = left.data;
        let rData = right.data;

        if(lData < rData){
            currentNode.next = left;
            left = left.next;
        }else {
            currentNode.next = right;
            right = right.next;
        }
        currentNode = currentNode.next;
    }

    while(left != null){
        currentNode.next = left;
        left = left.next;
        currentNode = currentNode.next;
    }

    while(right != null){
        currentNode.next = right;
        right = right.next;
        currentNode = currentNode.next;
    }

    return mergeNode.head.next;

}


class LLNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function deleteMiddleNode(head) {
    if (head == null || head.next == null) {
        return head;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    // We add an additional check for fast.next.next to make sure 
    // that in case of an even length list, slow pointer points to the 
    // first node of the second half of the list.
    while (fast != null && fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    // delete the middle node
    if (prev != null && slow != null) {
        prev.next = slow.next;
    }
    
    return head;
}

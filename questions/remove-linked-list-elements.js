/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = function(head, val) {
    let result = head;
    let current = head;
    let prev = null;
    
    while (current?.val) {
       if (current.val === val) {
           if (current === result) {
               result = current.next;
           }
           
           if (prev?.next) {
               prev.next = current.next;
           } else {
               prev = current
           }
           
        } else {
            prev = current;
        }
        
        current = current.next;
        
    }
    
    return result;
};

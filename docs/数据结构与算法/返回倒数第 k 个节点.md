题目：返回倒数第 k 个节点

```
面试题 02.02. 返回倒数第 k 个节点
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明： 给定的 k 保证是有效的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

*思路一：双指针计数*

定义两个指针，当快指针走的时候，计数n++, 直到快慢指针之间的偏移量达到了k，慢指针开始移动。当快指针遍历完的同时，慢指针刚好就是倒数k个值。

```js
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    var fast = head;
    var slow = head;
    var n = 0;
    while (fast) {
        fast = fast.next;
        if(n >= k) {
            slow = slow.next;
        }
        n++;
    }
    return slow.val;
};
```

*思路二：遍历进入数组，然后取值*

```js
var kthToLast = function(head, k) {
    var arr = [];

    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr[arr.length-k]
}
```


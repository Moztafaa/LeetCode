/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
 
public class Solution
{
    public void ReorderList(ListNode head)
    {
        List<ListNode> list = new();
        ListNode cur = head;
        while (cur is not null)
        {
            list.Add(cur);
            cur = cur.next;
        }
        int l = 0, r = list.Count - 1;
        while (l < r)
        {
            list[l].next = list[r];
            l++;
            if(l >= r) break;
            list[r].next = list[l];
            r--;
        }

        list[l].next =null;

    }
}


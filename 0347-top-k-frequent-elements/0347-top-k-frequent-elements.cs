public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        int[] res = new int[k];
        var dic = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (dic.ContainsKey(nums[i]))
            {
                dic[nums[i]]++;
            }
            else
            {
                dic.Add(nums[i], 1);
            }
        }

        var pq = new PriorityQueue<int, int>();
        foreach (var key in dic.Keys)
        {
            pq.Enqueue(key, dic[key]);
            if (pq.Count > k) pq.Dequeue();
        }

        int i2 = k;
        while (pq.Count > 0)
        {
            res[--i2] = pq.Dequeue();
        }

        return res;
    }
}
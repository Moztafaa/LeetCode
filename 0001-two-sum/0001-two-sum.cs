public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        var inx = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            int diff = target - nums[i];
            if (inx.ContainsKey(diff))
            {
                return new int[] { i, inx[diff] };
            }
            inx[nums[i]] = i;

        }

        return null;
    }
}
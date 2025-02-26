public class Solution
{
    public int Search(int[] nums, int target)
    {
        int left = 0;
        int right = nums.Length - 1;
        while (right >= left)
        {
            int mid = (right + left) / 2;
            if (target == nums[mid])
            {
                return mid;
            }
            else if (target < nums[mid])
            {
                right = mid;
            }
            else
            {
                left = mid;
            }
        }

        return -1;
    }
}
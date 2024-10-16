public class Solution
{
    public void Rotate(int[] nums, int k)
    {
        k = k % nums.Length; // Normalize k
        var newArr = new int[nums.Length];
        
        for (int i = 0; i < nums.Length; i++)
        {
            newArr[(i + k) % nums.Length] = nums[i];
        }

        for (int i = 0; i < nums.Length; i++) {
            nums[i] = newArr[i];
        }
    }
}
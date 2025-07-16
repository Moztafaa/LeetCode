public class Solution {
    public bool SearchMatrix(int[][] matrix, int target)
    {
       
        foreach (var t in matrix)
        {
            for (int n = 0; n < t.Length; n++)
            {
                if (t[n] == target)
                {
                    return true;
                }
            }
        }

        return false;
    }
}
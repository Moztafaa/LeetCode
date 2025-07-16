public class Solution
{
    public bool SearchMatrix(int[][] matrix, int target)
    {
        var ROWS = matrix.Length;
        var COLS = matrix[0].Length;

        var top = 0;
        var bot = ROWS - 1;
        var row = 0;

        while (top <= bot)
        {
            row = (top + bot) / 2;
            if (target > matrix[row][COLS -1])
            {
                top = row + 1;
            }
            else if (target < matrix[row][0])
            {
                bot = row - 1;
            }
            else
            {
                break;
            }
        }

        if (!(top <= bot))
        {
            return false;
        }

        return Array.BinarySearch(matrix[row], target) >= 0;
    }
}


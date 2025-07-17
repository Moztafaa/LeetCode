
public class Solution
{
    public int MinEatingSpeed(int[] piles, int h)
    {
        int l = 1, r = piles.Max();
        int res = r;
        while (l <= r)
        {
            int mid = (l + r) / 2;
            long totlaSpeed = 0;
            foreach (var pile in piles)
            {
                totlaSpeed += (int)Math.Ceiling((double)pile / mid);
            }

            if (totlaSpeed <= h)
            {
                res = mid;
                r = mid - 1;
            }
            else
            {
                l = mid + 1;
            }
        }

        return res;
    }
}
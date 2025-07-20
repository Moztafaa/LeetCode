public class Solution {
    public int MySqrt(int x) {
        int l = 0, r = x;
        int res = 0;
        if(x ==0) return 0;
        while (l <= r)
        {
            int m = l + (r -l) / 2;
            long can = (long) m * m;
            if(can > x)
            {
                r = m -1;
            }
            else
            {
                l = m +1;
                res = Math.Max(res, m);
            }
        }
        return res;
    }
}
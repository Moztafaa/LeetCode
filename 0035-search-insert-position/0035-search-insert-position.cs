public class Solution {
    public int SearchInsert(int[] nums, int target) {
        var idx= Array.BinarySearch(nums, target);
        if (idx<0){
            return ~idx ;
        }
        return idx;
    }
}
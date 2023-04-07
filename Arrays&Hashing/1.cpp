#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
  bool containsDuplicate(vector<int> &nums)
  {
    set<int> s;
    for (int i = 0; i < nums.size(); i++)
    {
      // check if the element is already present in the set
      // if (s.find(nums[i]) != s.end())
      //   return true;
      s.insert(nums[i]);
    }
    if (nums.size() == s.size())
      return false;
    else
      return true;
  }
};

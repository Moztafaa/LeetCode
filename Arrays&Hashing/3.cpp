#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    vector<int> result;
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++)
    {
      if (mp.find(target - nums[i]) != mp.end())
      {
        result.push_back(mp[target - nums[i]]);
        result.push_back(i);
        return result;
      }
      mp[nums[i]] = i;
    }
  }
};
/*
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
  vector<int> twoSum(vector<int> &nums, int target)
  {
    vector<int> result;
    for (int i = 0; i < nums.size(); i++)
    {
      for (int j = i + 1; j < nums.size(); j++)
      {
        if (nums[i] + nums[j] == target)
        {
          result.push_back(i);
          result.push_back(j);
        }
      }
    }
    return result;
  }
};

*/
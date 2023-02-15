#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
  vector<int> topKFrequent(vector<int> &nums, int k)
  {
    unordered_map<int, int> m;
    for (auto &n : nums)
    {
      m[n]++;
    }
    vector<vector<int>> bucket(nums.size() + 1);
    for (auto it : m)
    {
      bucket[it.second].push_back(it.first);
    }
    // sort m
    vector<int> res;
    // for (int i = bucket.size() - 1; i >= 0 && res.size() < k; i--)
    // {
    //   for (auto &n : bucket[i])
    //   {
    //     res.push_back(n);
    //   }
    // }
    for (int i = nums.size(); i >= 0; i--)
    {
      if (res.size() >= k)
        break;
      if (!bucket[i].empty())
      {
        res.insert(res.end(), bucket[i].begin(), bucket[i].end());
      }
    }

    return res;
  }
};

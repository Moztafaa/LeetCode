#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs)
  {
    vector<vector<string>> res;
    unordered_map<string, vector<string>> mp;
    for (auto &s : strs)
    {
      string temp = s;
      sort(temp.begin(), temp.end());
      mp[temp].push_back(s);
    }

    for (auto &m : mp)
    {
      res.push_back(m.second);
    }
    return res;
  }
};
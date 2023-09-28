#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string trancate(string str)
{
  string arr = str;
  transform(arr.begin(), arr.end(), arr.begin(), ::tolower);
  string result = "";
  for (int i = 0; i < arr.length(); i++)
  {
    if ((arr[i] >= 'a' && arr[i] <= 'z') || (arr[i] >= '0' && arr[i] <= '9'))
    {
      result.push_back(arr[i]);
    }
  }
  return result;
}
bool isPalindrome(string s)
{
  if (s == " ")
    return true;
  string trun = trancate(s);
  int l = 0, r = trun.length() - 1;
  while (l < r)
  {
    if (trun[l] != trun[r])
      return false;
    l++;
    r--;
  }
  return true;
}

bool pali(string str)
{
  string ltr = "", rtl = "";
  for (int i = 0; i < str.length(); i++)
  {
    ltr.push_back(str[i]);
  }
  for (int i = str.length() - 1; i >= 0; i--)
  {
    rtl.push_back(str[i]);
  }
  return ltr == rtl ? true : false;
}

int main()
{
  string s = "apppppsdpa";
  cout << isPalindrome(s) << endl;
}
public class Solution
{
    public string MakeGood(string s)
    {
        var stack = new Stack<char>();
        for (int i = 0; i < s.Length; i++)
        {
            if (stack.Count == 0)
            {
                stack.Push(s[i]);
            }
            else if (Math.Abs(stack.Peek() - s[i]) == 32)
            {
                stack.Pop();
            }
            else
            {
                stack.Push(s[i]);
            }
        }

        return string.Join("", stack.ToArray().Reverse());
    }
}
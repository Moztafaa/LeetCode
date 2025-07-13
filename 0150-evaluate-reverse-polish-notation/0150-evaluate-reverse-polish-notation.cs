
public class Solution
{
    public int EvalRPN(string[] tokens)
    {
        Stack<int> stack = new();
        int result;
        int first, second;
        string operand;
        List<string> operands = ["+", "-", "*", "/"];
        foreach (var token in tokens)
        {
            if (!operands.Contains(token))
            {
                stack.Push(Convert.ToInt32(token));
            }
            else
            {
                if (token == "+")
                {
                    second = stack.Pop();
                    first = stack.Pop();
                    result = first + second;
                    stack.Push(result);
                }
                else if (token == "-")
                {
                    second = stack.Pop();
                    first = stack.Pop();
                    result = first - second;
                    stack.Push(result);
                }
                else if (token == "*")
                {
                    second = stack.Pop();
                    first = stack.Pop();
                    result = first * second;
                    stack.Push(result);
                }
                else if (token == "/")
                {
                    second = stack.Pop();
                    first = stack.Pop();
                    result = first / second;
                    stack.Push(result);
                }
            }
        }

        return stack.Peek();
    }
}

public class Solution
{
    public int EvalRPN(string[] tokens)
    {
        Stack<int> stack = new();
        List<string> operands = ["+", "-", "*", "/"];
        foreach (var token in tokens)
        {
            if (!operands.Contains(token))
            {
                stack.Push(Convert.ToInt32(token));
            }
            else
            {
                int second = stack.Pop();
                int first = stack.Pop();
                switch (token)
                {
                    case "+":
                        stack.Push(first + second);
                        break;
                    case "-":
                        stack.Push( first - second);
                        break;
                    case "*":
                        stack.Push( first * second);
                        break;
                    case "/":
                        stack.Push(first / second);
                        break;
                }
            }
        }

        return stack.Peek();
    }
}
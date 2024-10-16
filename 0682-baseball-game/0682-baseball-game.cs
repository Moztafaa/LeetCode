public class Solution
{
    public int CalPoints(string[] operations)
    {
        var stack = new Stack<string>();
        var cases = new List<string>();
        cases.Add("+");
        cases.Add("D");
        cases.Add("C");

        foreach (var operation in operations)
        {
            if (!cases.Contains(operation))
            {
                stack.Push(operation);
            }
            else if (operation == "C")
            {
                stack.Pop();
            }
            else if (operation == "D")
            {
                var top = stack.Peek();
                var topDouble = Convert.ToInt32(top) * 2;
                stack.Push(topDouble.ToString());
            }
            else if (operation == "+")
            {
                var firstTop = stack.Pop();
                var secondTop = stack.Peek();
                var sum = Convert.ToInt32(firstTop) + Convert.ToInt32(secondTop);
                stack.Push(firstTop);
                stack.Push(sum.ToString());
            }
        }

        // convert the stack to int and return the sum
        var result = 0;
        foreach (var VARIABLE in stack)
        {
            result += Convert.ToInt32(VARIABLE);
        }

        return result;
    }
}
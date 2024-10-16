public class MyStack {
    
    private Queue<int> queue;
    public MyStack() {
        queue = new Queue<int>();
    }
    
    public void Push(int x) {
        queue.Enqueue(x);
    }
    
    public int Pop() {
        // pop the last element entered 
        var count = queue.Count;
        for (int i = 0; i < count - 1; i++)
        {
            queue.Enqueue(queue.Dequeue());
        }
        return queue.Dequeue();
    }
    
    public int Top() {      
        var count = queue.Count;
        for (int i = 0; i < count - 1; i++)
        {
            queue.Enqueue(queue.Dequeue());
        }
        var top = queue.Peek();
        queue.Enqueue(queue.Dequeue());

        return top;
    }
    
    public bool Empty() {
        return queue.Count == 0;
    }
}
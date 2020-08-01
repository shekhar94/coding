import java.util.Stack;

public class DFS {

    public static void DFSRecursive(int startingVertex, int[][] graph, boolean[] visited) {
        if (!visited[startingVertex]) {
            System.out.print((startingVertex + 1) + " ");

            visited[startingVertex] = true;
            for (int vertex = 0; vertex < graph.length; vertex++) {
                if (!visited[vertex] && graph[startingVertex][vertex] == 1) {
                    DFSRecursive(vertex, graph, visited);
                }
            }
        }
    }

    private static void DFSTraversal(int startingVertex, int[][] graph) {
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[graph.length];
        stack.push(startingVertex);

        System.out.println("DFS traversal:");
        while (!stack.isEmpty()) {
            int currentNode = stack.peek();
            if (!visited[currentNode]) {
                System.out.print((currentNode + 1) + " ");
            }
            visited[currentNode] = true;
            boolean unexploredVertexFound = false;

            for (int vertex = 0; vertex < graph.length && !unexploredVertexFound; vertex++) {
                if (!visited[vertex] && graph[currentNode][vertex] == 1) {
                    stack.push(vertex);
                    unexploredVertexFound = true;
                }
            }
            if (!unexploredVertexFound) {
                // if all the adjacent nodes are visited then pop currentNode from stack
                stack.pop();
            }
        }

    }

    public static void main(String[] args) {
        // int[][] graph = {{0, 1, 1, 1, 0}, {1, 0, 1, 0, 0}, {1, 1, 0, 1, 1}, {1, 0, 1, 0, 1}, {0, 0, 1, 1, 0}};
        int[][] graph = {{0, 1, 1, 1, 0, 0, 0}, {1, 0, 1, 0, 0, 0, 0}, {1, 1, 0, 1, 1, 0, 0}, {1, 0, 1, 0, 1, 0, 0},
                {0, 0, 1, 1, 0, 1, 1}, {0, 0, 0, 0, 1, 0, 0}, {0, 0, 0, 0, 1, 0, 0}};
        // DFSTraversal(0, graph);

        boolean[] visited = new boolean[graph.length];
        DFSRecursive(3, graph, visited);
    }
}

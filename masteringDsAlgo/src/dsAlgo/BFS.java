package dsAlgo;

import java.util.LinkedList;
import java.util.Queue;

public class BFS {

    private static void BFSTraversal(int startingNode, int[][] graph) {
        boolean[] visited = new boolean[graph.length];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(startingNode);
        visited[startingNode] = true;

        System.out.println("BFS Traversal:");
        while (!queue.isEmpty()) {
            int currentNode = queue.poll();
            System.out.print((currentNode+1) + " ");
            for (int vertex = 0; vertex < graph.length; vertex++) {
                if (!visited[vertex] && graph[currentNode][vertex] == 1) {
                    queue.add(vertex);
                    visited[vertex] = true;
                }
            }
        }
    }

    public static void main(String[] args) {
        // int[][] graph = {{0, 1, 1, 1, 0}, {1, 0, 1, 0, 0}, {1, 1, 0, 1, 1}, {1, 0, 1, 0, 1}, {0, 0, 1, 1, 0}};
        int[][] graph = {
                {0, 1, 1, 1, 0, 0, 0},
                {1, 0, 1, 0, 0, 0, 0},
                {1, 1, 0, 1, 1, 0, 0},
                {1, 0, 1, 0, 1, 0, 0},
                {0, 0, 1, 1, 0, 1, 1},
                {0, 0, 0, 0, 1, 0, 0},
                {0, 0, 0, 0, 1, 0, 0}
        };

        BFSTraversal(0, graph);
    }
}

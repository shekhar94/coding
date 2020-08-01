import java.util.*;

public class BFS {
    public static void main(String[] args) {
        int[][] graph = {{0, 1, 1, 1, 0}, {1, 0, 1, 0, 0}, {1, 1, 0, 1, 1}, {1, 0, 1, 0, 1}, {0, 0, 1, 1, 0}};

        ArrayList<Integer> visited = new ArrayList<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        visited.add(0);

        while (!queue.isEmpty()) {
            int currentNode = queue.poll();

            for (int i = 0; i < graph.length; i++) {
                if (!visited.contains(i) && graph[currentNode][i] == 1) {
                    System.out.println("adding " + (i+1));
                    queue.add(i);
                    visited.add(i);
                }
            }
        }
        for(Integer ele: visited) {
            System.out.print((ele+1) + " ");
        }
    }
}

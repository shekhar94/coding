import queue
class Graph:
    def __init__(self, n):
        self.graph = dict()
        self.n = n
        for i in range(n):
            self.graph[i] = []

    def connect(self, node_1, node_2): #undirected graph
        self.graph[node_1].append(node_2)
        self.graph[node_2].append(node_1)

    def find_all_distances(self, source_node):
        q = queue.Queue()
        q.put(source_node)
        visited = dict()
        level = 0
        no_of_nodes_at_this_level = 1
        distances = dict()
        while not q.empty():
            node = q.get()
            no_of_nodes_at_this_level -= 1

            if not node in visited:
                for i in range(len(self.graph[node])):
                    if not self.graph[node][i] in visited:
                        q.put(self.graph[node][i])
                distances[node] = level
                visited[node] = True

            if no_of_nodes_at_this_level is 0:
                no_of_nodes_at_this_level = q.qsize()
                level += 1

        return distances
    
    def print_distances(self, distances, source_node):
        distance = []
        for i in range(self.n):
            if (i is not source_node and i in distances):
                distance.append(distances[i] * 6)
            elif i is not source_node:
                distance.append(-1)
        for i in range(len(distance)):
            print(distance[i], end=" ")
        print("")
                        

def main():
    graph = Graph(4)
    graph.connect(0, 1)
    graph.connect(0, 2)
    s = 1
    distances = graph.find_all_distances(s-1)
    graph.print_distances(distances, s-1)


main()


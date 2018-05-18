# Author: Shekhar Suman 18-05-18
# BFS and DFS implementation for graph
import queue 
class Node:
    def __init__(self, id):
        self.id = id
        self.adjacent = []

class Graph:
    def __init__(self):
        self.nodeLookup = dict()
        self.nodeLookup[1] = Node(1)
        self.nodeLookup[2] = Node(2)
        self.nodeLookup[3] = Node(3)
        self.nodeLookup[4] = Node(4)
        self.nodeLookup[5] = Node(5)
        self.nodeLookup[6] = Node(6)
        self.add_edge(1, 2)
        self.add_edge(1, 3)
        self.add_edge(2, 4)
        self.add_edge(2, 5)
        self.add_edge(3, 4)
        self.add_edge(3, 5)
        self.add_edge(5, 6)
    
    def get_node(self, id):
        return self.nodeLookup.get(id)

    def add_edge(self, source, destination):
        s = self.get_node(source)
        d = self.get_node(destination)
        s.adjacent.append(d)

    def dfs_helper(self, source, destination):
        s = self.get_node(source)
        d = self.get_node(destination)
        visited = dict()
        found = self.dfs(s, d, visited) 
        print(found)

    def dfs(self, source, destination, visited):
        if source.id in visited:
            return False

        if (source == destination):
            return True
        visited[source.id] = True
        print(visited)
        for child in source.adjacent:
            if self.dfs(child, destination, visited): # this returns the last recursive call value
                return True
        return False

    def bfs_helper(self, source, destination):
        s = self.get_node(source)
        d = self.get_node(destination)
        found = self.bfs(s, d) 
        print(found)

    def bfs(self, source, destination):
        visited = dict()
        q = queue.Queue()
        q.put(source)
        while not q.empty():
            node = q.get()
            if node == destination:
                return True
            if node.id in visited:
                continue
            print(visited)
            visited[node.id] = True
            for child in node.adjacent:
                q.put(child)
        return False



g = Graph()
# g.dfs_helper(1, 6)
g.bfs_helper(1, 5)
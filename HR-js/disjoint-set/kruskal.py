class Node:
    def __init__(self, rank, data, parent):
        self.rank = rank
        self.data = data
        self.parent = parent

class DisjointSet:
    def __init__(self):
        self.map = dict()
    
    def union(self ,data1, data2):
        node1 = self.map[data1]
        node2 = self.map[data2]
        parent1 = self.findSet(node1)
        parent2 = self.findSet(node2)

        if parent1.data == parent2.data:
            return False
        
        if parent1.rank >= parent2.rank:
            parent1.rank = (parent1.rank + 1) if parent1.rank == parent2.rank else parent1.rank         
            parent2.parent = parent1
        else:
            parent1.parent = parent2
        return True
    
    def findSet(self, node):
        parent = node.parent
        if parent == None:
            return node
        node.parent = self.findSet(node.parent)
        return node.parent

    def makeSet(self, data):
        node = Node(0, data, None)
        self.map[data] = node


class Edge:
    def __init__(self, fr, to, weight):
        self.fr = fr
        self.to = to
        self.weight = weight


def kruskals(gNodes, gFrom, gTo, gWeight):
    edgeArr = list()
    for i in range(0, len(gFrom)):
        edge = Edge(gFrom[i], gTo[i], gWeight[i])
        edgeArr.append(edge)
    sortedEdgeArr = sorted(edgeArr, key=lambda edge: edge.weight)

    dSet = DisjointSet()
    for i in range(1, gNodes + 1):
        dSet.makeSet(i)

    edgeCount = 0
    i = 0
    total = 0
    while (edgeCount < gNodes - 1 and i < len(sortedEdgeArr)):
        edge = sortedEdgeArr[i]
        flag = dSet.union(edge.fr, edge.to)
        if flag:
            total = total + edge.weight
        i = i + 1
    return total

def main():
    gNodes = 4
    gFr = [1, 1, 4, 2, 3, 3]
    gTo = [2, 3, 1, 4, 2, 4]
    gWeight = [5, 3, 6, 7, 4, 5]

    total = kruskals(gNodes, gFr, gTo, gWeight)
    print(total)

main()
    




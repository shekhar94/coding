// Time O(E^d) |E| is the number of total flights and d is the maximum number of flights from an airport.
// O(|V| + |E|) where |V| is the number of airports and |E| is the number of flights.

var findItinerary = function (tickets) {
    tickets.sort((t1, t2) => t1[1].localeCompare(t2[1]));
    const adjList = new Map();
    for (let ticket of tickets) {
        const [src, dest] = ticket;
        if (!adjList.has(src)) adjList.set(src, []);
        adjList.get(src).push(dest);
    }

    const res = ["JFK"];
    function dfs(src) {
        if (res.length === tickets.length + 1) return true;
        if (!adjList.has(src)) return false;

        const destinations = [...adjList.get(src)];
        for (let i = 0; i < destinations.length; i++) {
            const dest = destinations[i];
            adjList.get(src).splice(i, 1);
            res.push(dest);
            if (dfs(dest)) return true;

            // backtrack
            adjList.get(src).splice(i, 0, dest);
            res.pop();
        }
        return false;
    }
    dfs("JFK");
    return res;
}

/*

Complexity

Time Complexity: \mathcal{O}(|E|^d)O(∣E∣
d
 ) where |E|∣E∣ is the number of total flights and dd is the maximum number of flights from an airport.

It is tricky to estimate the time complexity of the backtracking algorithm, since the algorithm often has an early stopping depending on the input.

To calculate a loose upper bound for the time complexity, let us consider it as a combination problem where the goal is to construct a sequence of a specific order, i.e. |V_1V_2...V_n|∣V
1

 V
2

 ...V
n

 ∣. For each position V_iV
i

 , we could have dd choices, i.e. at each airport one could have at most dd possible destinations. Since the length of the sequence is |E|∣E∣, the total number of combination would be |E|^d∣E∣
d
 .

In the worst case, our backtracking algorithm would have to enumerate all possible combinations.

Space Complexity: \mathcal{O}(|V| + |E|)O(∣V∣+∣E∣) where |V|∣V∣ is the number of airports and |E|∣E∣ is the number of flights.

In the algorithm, we use the graph as well as the visit bitmap, which would require the space of |V| + |E|∣V∣+∣E∣.

Since we applied recursion in the algorithm, which would incur additional memory consumption in the function call stack. The maximum depth of the recursion would be exactly the number of flights in the input, i.e. |E|∣E∣.

As a result, the total space complexity of the algorithm would be \mathcal{O}(|V| + 2\cdot|E|) = \mathcal{O}(|V| + |E|)O(∣V∣+2⋅∣E∣)=O(∣V∣+∣E∣).


*/

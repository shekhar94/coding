var accountsMerge = function (accounts) {
    const tree = new Array(accounts.length).fill(0).map((val, idx) => idx);
    const rank = new Array(accounts.length).fill(0);

    function root(a) {
        while (tree[a] !== a) {
            tree[a] = tree[tree[a]]; // path compression
            a = tree[a];
        }
        return a;
    }
    // union by rank
    function union(a, b) {
        const rootA = root(a);
        const rootB = root(b);
        if (rank[rootA] <= rank[rootB]) {
            tree[rootA] = rootB;
            rank[rootB] += rank[rootA];
        } else {
            tree[rootB] = rootA;
            rank[rootA] += rank[rootB];
        }
    }

    let emailToIdxMap = new Map();

    // Find the union candidates and merge
    // O(NKlog(N))
    for (let i = 0; i < accounts.length; i++) { // O(N)
        const account = accounts[i];
        const [, ...emails] = account;
        for (let email of emails) { // O(N*K)
            if (emailToIdxMap.has(email)) {
                union(emailToIdxMap.get(email), i); // O(log(N))
            } else emailToIdxMap.set(email, i);
        }
    }

    const rootToEmailSetMap = new Map();
    for (let i = 0; i < tree.length; i++) {
        const currRoot = root(i);
        if (!rootToEmailSetMap.has(currRoot)) {
            rootToEmailSetMap.set(currRoot, new Set());
        }
        const [, ...emails] = accounts[i];
        const set = rootToEmailSetMap.get(currRoot);
        emails.forEach(set.add, set);
    }

    const res = [];
    for (let rootNode of [...rootToEmailSetMap.keys()]) {
        res.push([accounts[rootNode][0], ...[...rootToEmailSetMap.get(rootNode)].sort()]);
    }
    return res;
};



// accountsMerge([["john", 'a', 'b'], ["john", 'c', 'b'], ["mary", 'm', 'n'],
// ['john', 'j', 'k'], ['john', 'j', 'l'], ["mary", 'm', 'mo']]);
// console.log(accountsMerge([
//     ["David", "David0@m.co", "David4@m.co", "David3@m.co"],
//     ["David", "David5@m.co", "David5@m.co", "David0@m.co"],
//     ["David", "David1@m.co", "David4@m.co", "David0@m.co"],
//     ["David", "David0@m.co", "David1@m.co", "David3@m.co"],
//     ["David", "David4@m.co", "David1@m.co", "David3@m.co"]]));
console.log(accountsMerge([
    ["David", "David0@m.co", "David1@m.co"],
    ["David", "David3@m.co", "David4@m.co"],
    ["David", "David4@m.co", "David5@m.co"],
    ["David", "David2@m.co", "David3@m.co"],
    ["David", "David1@m.co", "David2@m.co"]]));
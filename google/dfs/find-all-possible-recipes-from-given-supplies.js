/* 
S: Supplies.length
R: Recipes.length
Time: O(R*(S + R))
*/
var findAllRecipes = function (recipes, ingredients, supplies) {
    const adjList = new Map(), visited = new Set();

    for (let i = 0; i < recipes.length; i++) {
        const ingArr = ingredients[i], recipe = recipes[i], prereq = [];
        for (let ing of ingArr) if (!supplies.includes(ing)) prereq.push(ing);
        adjList.set(recipe, prereq);
    }

    function dfs(recipe) {
        if (!adjList.get(recipe)) return false;
        if (adjList.get(recipe).length === 0) return true;
        if (visited.has(recipe)) return false;

        visited.add(recipe);
        const prereq = adjList.get(recipe);

        for (let j = 0; j < prereq.length; j++) {
            if (!dfs(prereq[j])) return false;
        }

        adjList.set(recipe, []);
        return true;
    }
    const res = [];
    for (let i = 0; i < recipes.length; i++) {
        if (dfs(recipes[i])) res.push(recipes[i]);
    }
    return res;
};


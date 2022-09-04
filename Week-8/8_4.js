// Question: https://leetcode.com/problems/find-if-path-exists-in-graph/
// Time complexity: O(vertices + edges)
// Space complexity: O(vertices + edges)

const getAdjList = (edges) => {
  let adjList = new Map();
  for (const [v1, v2] of edges) {
    const v1Val = adjList.get(v1) || [];
    adjList.set(v1, [...v1Val, v2]);

    const v2Val = adjList.get(v2) || [];
    adjList.set(v2, [...v2Val, v1]);
  }
  return adjList;
};

var validPath = function (n, edges, source, destination) {
  let visited = new Set();
  const adjList = getAdjList(edges);

  const dfs = (v) => {
    visited.add(v);
    if (v == destination) return true;

    const edges = adjList.get(v);
    for (const edge of edges) {
      if (visited.has(edge)) continue;
      if (dfs(edge)) return true;
    }
    return false;
  };

  return dfs(source);
};

// Question: https://leetcode.com/problems/all-paths-from-source-to-target/submissions/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const source = 0;
  const destination = graph.length - 1;
  let paths = [];

  function traverse(v, currPath = []) {
    const newPath = [...currPath, v];
    const edges = graph[v];
    for (const e of edges) {
      if (e == destination) paths.push([...newPath, destination]);
      else traverse(e, newPath);
    }
  }

  traverse(source);
  return paths;
};

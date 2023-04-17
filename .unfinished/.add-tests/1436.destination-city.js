/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = {};

  for (let i = 0; i < paths.length; i++) {
    const [a, b] = paths[i];

    if (map[b] === undefined) map[b] = false;
    map[a] = true;
  }

  for (let path in map) {
    if (!map[path]) return path;
  }
};

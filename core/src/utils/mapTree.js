// 树形结构遍历
// tree: node | [node], func: (node) => {})
export const mapTree = (tree, func) => {
  let node = null
  const list = Array.isArray(tree) ? tree : []
  while ((node = list.shift())) {
    func(node)
    Array.isArray(node.children) && list.push(...node.children)
  }
  return tree
}

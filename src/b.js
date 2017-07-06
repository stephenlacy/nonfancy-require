module.exports = function b (children) {
  var node = document.createElement('div')
  node.className = 'b'
  var content = document.createTextNode(children)
  node.append(content)
  return node
}

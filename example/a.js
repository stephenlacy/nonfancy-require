var b = require('./b')
var items = require('./items')

module.exports = function a () {
  var node = document.createElement('div')
  node.className = 'a'

  node.append('this is the list')
  items.forEach(function (v) {
    node.append(b(v.content))
  })
  return node
}

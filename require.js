var require = function require(path) {
  var file = path.replace(/\.[^/.]+$/, '').replace('\./', '')
  var root = document.currentScript.src.replace(/[^\/]*$/, '')
  var req = new XMLHttpRequest()
  var ext = '.js'
  req.open('GET', root + file + ext, false)
  req.send(null)
  if (req.status !== 200) return function () { console.error(path, 'failed to load') }
  var script = eval('var module = {}; ' + req.response)
  return script
}

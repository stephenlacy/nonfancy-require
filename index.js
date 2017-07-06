

const fs = require('fs')

const src = './src/index.js'

const obj = {}

const regx = new RegExp('([\(]?[a-z][\'])', 'g')
fs.readFile(src, (err, file) => {
  console.log(file.toString().match(regx))
})

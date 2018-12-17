const path = require('path')

//finds the current path the file module is in
module.exports = path.dirname(process.mainModule.filename);
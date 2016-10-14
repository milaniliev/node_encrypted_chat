var crypto = require('crypto')
var fs = require("fs")
var key = crypto.randomBytes(128)

fs.writeFileSync("./key", key)

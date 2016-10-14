var crypto = require("crypto")
var fs = require("fs")
var key = fs.readFileSync("./key")

module.exports = {
  encrypt: function(plaintext){
    var encryptor = crypto.createCipher('aes-128-ecb', key)
    return Buffer.concat([encryptor.update(plaintext, "utf-8"), encryptor.final()])
  },

  decrypt: function(ciphertext){
    var decryptor = crypto.createDecipher('aes-128-ecb', key)
    return decryptor.update(ciphertext, null, "utf-8") + decryptor.final("utf-8")
  }
}
const crypto = require("crypto")
var encryptor = crypto.createCipher('aes-128-ecb', "happy-memories")
var encrypted_message = encryptor.update("PLAINTEXT", "utf-8")
encrypted_message = Buffer.concat([encrypted_message, encryptor.final()]) 
var decryptor = crypto.createDecipher('aes-128-ecb', "happy-memories")
var incoming_message = decryptor.update(encrypted_message, null, "utf-8")
incoming_message += decryptor.final("utf-8")

console.log(incoming_message.toString("utf-8"))
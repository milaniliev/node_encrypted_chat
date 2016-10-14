const crypto = require("crypto")
const Cryptographer = require("./cryptographer")
const assert = require("assert")

var encrypted_message = Cryptographer.encrypt("PLAINTEXT")
var plaintext_message = Cryptographer.decrypt(encrypted_message)

assert.equal(plaintext_message, "PLAINTEXT")
console.log("Pass")
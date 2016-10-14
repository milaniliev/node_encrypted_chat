var net = require("net")
var readline = require('readline')
var Cryptographer = require("./cryptographer.js")

var ui = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var server_connection = new net.Socket("localhost")

server_connection.on("connect", function(){
  console.log("Woohoo, connected to server! :D")
  
  ui.on('line', function(plaintext_outgoing_message){
    var encrypted_outgoing_message = Cryptographer.encrypt(plaintext_outgoing_message)
    server_connection.write(encrypted_outgoing_message)
  })

  ui.setPrompt("Send message: ")
  ui.prompt()
})

server_connection.on("data", function(encrypted_incoming_message){
  var plaintext_incoming_message = Cryptographer.decrypt(encrypted_incoming_message)
  console.log(`Received: ${plaintext_incoming_message}`)
  ui.prompt()
})

server_connection.on("error", function(){
  console.log("Error connecting to server! :(")
  process.exit(0)
})

server_connection.connect({host: "localhost", port: 1234})

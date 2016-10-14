var net = require('net')
var Cryptographer = require("./cryptographer.js")

var server = new net.Server()

server.on('connection', function(client_connection){
  console.log("Yay! Client connected! :)")

  client_connection.on("data", function(encrypted_incoming_message){
    var plaintext_incoming_message = Cryptographer.decrypt(encrypted_incoming_message)

    console.log(`Received: ${plaintext_incoming_message}`)
    
    var plaintext_outgoing_message = `YOU SENT ME -> ${plaintext_incoming_message}`    
    var encrypted_outgoing_message = Cryptographer.encrypt(plaintext_outgoing_message) 
    client_connection.write(encrypted_outgoing_message)
  })
})

server.on('disconnect', function(disconnected_connection){
  console.log("Awww. Client disconnected. :(")
})

server.on('listening', function(){
  console.log("Hi! I'm a Server! :P \nI'm listening on localhost:1234")
})

server.listen({port: 1234})
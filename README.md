This is a proof-of-concept demonstrating 128-AES-encrypted chat with ECB chaining.

To run: 

1. Install Node.js (http://nodejs.org), any current version
2. `make`

Or, if your machine doesn't have `make`:

2. `node generate_key.js`
3. `node chat_server.js`
4. `node chat_client.js` (In a different terminal)

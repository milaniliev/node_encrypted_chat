run: key
	node chat_server.js &
	node chat_client.js  

key: 
	node generate_key.js

test: key
	node encryption_test.js
const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const chatServer = require('./lib/chatServer');

chatServer.listen(http);
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'));
});

http.listen(port, () => {
  console.log(`listening on ${port}`);
});

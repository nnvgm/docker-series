const express = require('express');

const key = require('./config/main');
const ConnectDB = require('./config/db');

const { port, mongoURL } = key;

ConnectDB(mongoURL);

const app = express();

app.get('/', function (req, res) {
  res.json({ data: 'Hello docker' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

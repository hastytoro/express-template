const express = require('express');
const cors = require('cors');
const os = require('os');
const path = require('path');
const knex = require('knex');

// express configuration:
const app = express();
app.use(cors());
app.use(express.json());

// home routes:
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  console.log('I have been hit!');
  res.end(
    JSON.stringify({
      message: req.socket.remoteAddress,
      net: os.networkInterfaces(),
    }),
  );
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log(`app is running on port 3000.`));

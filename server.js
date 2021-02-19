const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('knex');

// express configuration:
const app = express();
app.use(cors());
app.use(express.json());

// caching option one:
app.use(
  '/static',
  express.static(path.join(__dirname, 'public'), { maxAge: '2h' }),
);

// caching option two:
app.get('/test', (req, res) => {
  res.header('Cache-Control', 'public, max-age=86400');
  res.header('Content-Type', 'text/html');
  res.send('<h2>Test string</h2>');
});

// app.get('/', (req, res) => res.send('home route.'));
// app.get('/signin', (req, res) => res.send('signin route.'));
// app.get('/register', (req, res) => res.send('register route.'));
// app.get('/about', (req, res) => res.send('about route.'));

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log(`app is running on port 3000.`));

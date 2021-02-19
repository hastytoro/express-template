const express = require('express');
const cors = require('cors');
const path = require('path');
const knex = require('knex');

// express configuration:
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('home route.'));
app.get('/signin', (req, res) => res.send('signin route.'));
app.get('/register', (req, res) => res.send('register route.'));
app.get('/about', (req, res) => res.send('about route.'));

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => console.log(`app is running on port 3000.`));

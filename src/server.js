require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

const port = 7700;
const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.PORT || port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${port}`);
});

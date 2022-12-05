/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port`);
});

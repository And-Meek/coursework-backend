require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.static('../frontend/build'));
app.use(cookieParser());
app.use(express.json());

app.use('/', routes);

const URL = process.env.DB_CONNECT_STRING;
mongoose.connect(URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
  });
});

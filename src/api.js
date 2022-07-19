const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const helmet = require('helmet');
const morgan = require('morgan');
const {
  loginRouter,
  userRouter,
  categoryRouter,
} = require('./routers');

app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('common'));

app.use(express.json());
app.use('/login', rescue(loginRouter));
app.use('/user', rescue(userRouter));
app.use('/categories', rescue(categoryRouter));

module.exports = app;

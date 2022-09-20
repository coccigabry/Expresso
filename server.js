const cors = require('cors');
const express = require('express');
const errorHandler = require('errorhandler');
const morgan = require('morgan');

const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);
app.use(errorHandler());

app.listen(PORT, ()=>{
  console.log(`Server listening on port: ${PORT}`);
});


module.exports = app;

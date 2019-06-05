const express = require('express');

//instantiating server
const server = express();

//global middleware:
server.use(express.json()); // built-in mw
// server.use(logger);


server.get('/', (req, res) => {
    res.send(`<h2>Let's do this zoo business!</h2>`)
  });


  //routing and API:
  
  const zooRouter = require('./data/zooRouter.js');
  server.use('/api/zoos', zooRouter);
  
  
module.exports = server;
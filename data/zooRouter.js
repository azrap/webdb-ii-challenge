const express = require('express');
const Zoos = require('./zoo-model.js')
const router = express.Router();


//CREATE:

router.post('/', async (req, res) => {
    try {
    //   console.log(res)
   
    const zoos = await Zoos.add(req.body);

      res.status(200).json(zoos);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang zoos',
      });
    }
  });


//READ: 

//get all zoos: 
router.get('/', async (req, res) => {
    try {
    //   console.log(res)
    console.log(Zoos);
    console.log('hello')
    const zoos = await Zoos.find();

      res.status(200).json(zoos);
    } catch (error) {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dang zoos',
      });
    }
  });

  module.exports = router;
const mongoose = require('mongoose');
const User = require('../models/users');
const express = require('express');

const connUri = 'mongodb://mongo:27017/mydb?authSource=admin';

const router = express.Router();

//handles url http://localhost:6001/rentals
router.post("/", (req, res, next) => {
  mongoose.connect(connUri, { useNewUrlParser : true, useMongoClient:true }, (err) => {
    let result = {};
    let status = 201;
    if (!err) {
      const { name, password } = req.body;
      const user = new User({ name, password }); // document = instance of a model
      // TODO: We can hash the password here before we insert instead of in the model
      user.save((err, user) => {
        if (!err) {
          result.status = status;
          result.result = user;
        } else {
          status = 500;
          result.status = status;
          result.error = err;
        }
        res.status(status).send(result);
      });
    } else {
      status = 500;
      result.status = status;some-mongo
      result.error = err;
      res.status(status).send(result);
    }
  });
});


module.exports = router;

var express = require('express');
var router = express.Router();
var PetsModel = require('../models/pets');
const {
  validateBody
} = require('../middlewares/route');
const Joi = require('@hapi/joi');

/* GET home page. */
router.get('/', function (req, res, next) {
  const result = PetsModel.query().then(pets => {
    if (pets) {
      res.status(200).json({
        success: true,
        pets
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'No pet found'
      });
    }
  }).catch(pets => {
    res.status(500).json({
      success: false,
      message: 'Error Occured'
    });
  });
});

router.post('/',
  validateBody(Joi.object().keys({
    name: Joi.string().required().description('pet  name'),
    color: Joi.string().required().description('pet  color'),
    age: Joi.number().integer().required().description('pet age'),
  }), {
    stripUnknown: true,
  }),

  function (req, res, next) {
    const result = PetsModel.query().insert(req.body).then(pets => {
      res.status(201).json({
        success: true,
        pets
      });
    }).catch(pets => {
      res.status(500).json({
        success: false,
        message: 'Error Occured'
      });
    });
  });

router.get('/:id', function (req, res, next) {
  const result = PetsModel.query().findById(req.params.id).then(pets => {
    if (pets) {
      res.status(200).json({
        success: true,
        pets
      });
    } else {
      res.status(400).json({
        success: true,
        message: 'No pet Found'
      });
    }
  }).catch(err => {
    res.status(500).json({
      success: true,
      message: 'Error Occcured'
    });
  });
});

router.delete('/:id', function (req, res, next) {
  //console.log('product', req.body);
  const result = PetsModel.query().deleteById(req.params.id).then(pets => {
    if (pets) {
      res.status(200).json({
        success: true,
        pets
      });
    } else {
      res.status(400).json({
        success: true,
        message: 'No pet Found'
      });
    }
  }).catch(err => {
    res.status(500);
    res.json({
      success: false,
      message: 'Error Occured'
    });
  });
});

module.exports = router;

require("dotenv").config();
const request = require('request');
var Products = require('../model/Products')


exports.addProducts = async function (req, res) {
  console.log('datee', req.body);

  try {
    let newProduct = new Products({
      name: req.body.name,
      cost: req.body.cost,
      size: req.body.email,
      image: req.body.images,
      category: req.body.category,
      subcategory: req.body.subcategory,
    })
    let savedItem = await newProduct.save();
    if (savedItem) {
      res.json({
        isSuccess: true,
        data: savedItem
      });
    } else {
      res.json({
        success: false,
        error: 'err'
      })
    }
  } catch (err) {
    console.log('err:', err)
    res.json({
      success: false,
      error: err
    })
  }

}

exports.getAllItems = async function (req, res) {
  try {
    let data = await Products.find({})
    if (data) {
      res.json({
        success: true,
        data
      })
    }
    else {
      res.json({
        success: false,
        error: "err"
      })
    }
  } catch (err) {
    res.json({
      success: false,
      error: err
    })
  }
}

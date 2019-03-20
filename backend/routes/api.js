const express = require('express')
var router = express.Router();
const productsController = require('../controller/productsController')

router.get('/', function (req, res) {
    res.json({
        'API': '1.0'
    });
});

router.post('/addProducts', productsController.addProducts);
router.get('/getAllItems', productsController.getAllItems);
module.exports = router;
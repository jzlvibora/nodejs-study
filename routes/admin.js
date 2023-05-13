const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button>Submit</button></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  });
  
router.post('/product', (req, res, next) =>{
    console.log(req.body)
    res.redirect('/')
  })

module.exports = router;
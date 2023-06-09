const bodyParser = require('body-parser');
const path = require('path')
const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req,res,next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})

app.listen(3000);

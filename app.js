const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controller/404-error');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getShopError);

app.listen(3000, () => {
    console.log("The server is listening to port 3000");   
});

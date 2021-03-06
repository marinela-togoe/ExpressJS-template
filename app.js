const http = require('http'); // Node specific module
const path = require('path'); // Makes it work in all operating systems;

const express = require('express'); // third party package;
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin'); // Own file;
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
});

app.listen(3000);
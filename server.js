const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname,'public')));
app.use(require('./controllers/dashboardRoutes'))

app.listen(PORT,()=> {
    console.log('server lisenting on: http://localhost:'+PORT)
})
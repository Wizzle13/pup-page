const express = require('express');

const routes = require('./controllers');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;



// code to setup handlebars.js
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
app.use(routes);
app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}`));


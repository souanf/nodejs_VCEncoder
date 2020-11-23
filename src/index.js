const path = require('path');
const express = require('express');
const handlebar  = require('express-handlebars');

const app = express();
const port = 3000;

//static request
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.engine('hbs', handlebar({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
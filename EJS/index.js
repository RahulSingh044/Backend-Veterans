const express = require('express')
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render("index");
})

app.get('/profile/:user/:age', function(req, res) {
    res.send(`Hello from ${req.params.user} of age ${req.params.age}`);
})

app.listen(3000)
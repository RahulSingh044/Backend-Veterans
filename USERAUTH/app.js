const express = require('express');
const app = express();

const path = require('path');
const userModel = require('./models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create', (req, res) => {

    let { username, email, password } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => { 
            // Store hash in your password DB.
            let user = await userModel.create({
                username,
                email,
                password: hash
            });

            let token = jwt.sign({email}, "shhhhhh");
            res.cookie("token", token);
            res.send("user created");
        });
     });

});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {

    let user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(401).send('Invalid email or password');

    bcrypt.compare(req.body.password, user.password, (err, result) => {

       if(result) {
        let token = jwt.sign({email: user.email}, "shhhhhh");
        res.cookie("token", token);
        res.send("Logged in");
       } 
       else res.send("Invalid Credentials");

    })
});

app.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/');
});

app.listen(3000);
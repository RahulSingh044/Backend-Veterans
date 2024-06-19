const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log("Time:", new Date(Date.now()).toString());
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile',function(req, res, next) {
    return next(new Error("Something went wrong")); // this will display on terminal
    // res.send("Chandu Champion");
})

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!') // this will display on frontend
  })

app.listen(3000)
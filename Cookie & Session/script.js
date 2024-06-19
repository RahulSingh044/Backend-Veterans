const express = require('express')
const app = express()

// These two lines are used to read the json and url type data from the blob file
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(3000)
const express = require('express');
const app = express();

const userModel = require('./user');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create',async (req, res) => {
    const user = await userModel.create({
      name: 'Veer',
      age: 30,
      email: 'john@example.com'
    });
    user.save();
   res.send(user);
  });

app.get('/update',async (req, res) => {
    const updateUser = await userModel.findOneAndUpdate({ name: 'John' }, {name: 'Mike'}, {new: true});  
    res.send(updateUser);
  });

app.get('/read', async (req, res) => {
    // let user = await userModel.find();
    // res.send(user);

    let userOne = await userModel.findOne({name: 'Veer'});
    res.send(userOne);

});  

app.get('/delete', async (req, res) => {
    let user = await userModel.findOneAndDelete({name: 'Veer'});
    res.send(user);
});

app.listen(3000);
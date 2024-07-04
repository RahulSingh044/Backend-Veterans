const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/create', async (req, res) => {
    const user = await userModel.create({
        username: 'Rahul',
        email: 'rahul@gmail.com',
        age: 20,
    })

    res.send(user);
});

app.get('/post', async (req, res) => {
    const post = await postModel.create ({
        postdata: 'Hey fromt the Backend Team',
        user: "6684e61cafc7dc16ac7a54e0"
    })
     
    let user = await  userModel.findOne({_id: "6684e61cafc7dc16ac7a54e0"});

    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
});

app.listen(3000);
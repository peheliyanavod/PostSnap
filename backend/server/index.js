const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require('./models/user');
const PostModel = require('./models/posts')

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

mongoose.connect("mongodb://localhost:27017/PostSnap")
.then(() => {
    console.log('MongoDB is running');
})
.catch((error) => {
    console.log(error);
})

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    UserModel.create({ name, email, password })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/login',(req,res) => {
    const {email,password} =req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Successfull");
            }
            else{
                res.json("Incorrect password");
            }
        }
        else{
            res.json("User not found");
        }
    })
})

app.post('/add-post',async (req,res) => {
    const {imageURL} = req.body;
    try{
        await PostModel.create({imageURL})
        res.send({status:"ok"});
    }
    catch(error){
        res.send({status: error});
    }
    
})

app.get('/get-posts',async (req,res) => {
    try{
        const posts = await PostModel.find({});
        res.json({status: "ok",data: posts});
    }
    catch(error){
        res.send({status: error});
    }
})

app.listen(port, () => {
    console.log('Server is running on port', port);
});

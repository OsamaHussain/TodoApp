const express = require('express');
const app = express();

const User = require('../models/user');

// app.get('/', (req, res) => {
//     res.sendFile("index.html");
// })

app.get('/getuser', async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})

// app.post('/create', async (req, res) => {
//     const { username, email, phone } = req.body;
//     const user = new User({
//         username, email, phone
//     })

//     await user.save();
//     res.status(200).json(user);
// });

exports.postUser=async(req,res)=>{
    console.log(req)
    const { username, email, phone } = req.body;
    const user = new User({
        username, email, phone
    })

    await user.save();
    res.status(200)  
}

exports.getAllUsers=async(req,res)=>
{
    const user =await User.find();
    res.status(200).json(user)
}


app.put('/update/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(user)
});

app.delete('/delete/:id', async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id, { new: true });
    res.json(user);
});

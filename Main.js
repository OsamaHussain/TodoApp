const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));

async function connectDb(){
   try{
      await mongoose.connect("mongodb+srv://osamahussain897:th3hack3r@cluster0.aye15f7.mongodb.net/",{
         useNewUrlParser: true
      });
      console.log("Database connected Successfuly!")
   }catch(error){
      console.log(error);
      process.exit(1);
   }
}
connectDb();

const UserSchema = new mongoose.Schema({
    username:String,
    email:String,
    phone:Number,
});
const User = mongoose.model('user', UserSchema);

app.get('/',(req,res)=>{
    res.sendFile("index.html");
})

app.get('/getuser', async(req, res)=>{
    const user = await User.find()
    res.status(200).json(user)
})

app.post('/create', async(req, res)=>{
    const {username, email, phone} = req.body;
    const user = new User({
        username, email, phone
    })
    await user.save();
    res.status(200).json(user);
});

app.put('/update/:id', async(req, res)=>{
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {new:true})
    res.json(user)
});

app.delete('/delete/:id', async(req, res)=>{
    const user = await User.findByIdAndDelete(req.params.id, {new:true});
    res.json(user);
});

app.listen(port, ()=>{
    console.log(`Server Started at http://localhost:${port}`);
})
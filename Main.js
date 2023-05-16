const express = require('express');
//const User = require('./models/user');
const app = express();
const port = 3000;
// app.use(express.static('public'));
require('dotenv').config({ path: './config.env' });
const connectDb = require('./db/db');
const User =require('./routes/userRout');
connectDb()

// const User = mongoose.model('User', UserSchema);
app.use('/api',User)

app.use(express.json());




app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
})
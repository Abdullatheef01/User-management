const mongoose= require('mongoose')
const dotenv=require('dotenv')
require('dotenv').config({ path: '../.env' });
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('success'))

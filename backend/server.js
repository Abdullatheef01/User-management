const express=require('express') //import
const cors=require('cors')
const app=express()
require('./config/db')
const routes=require('./routes/userRoutes')
app.use(cors()) //middleware
app.use(express.json())
app.use('/',routes)
app.listen(5000,"0.0.0.0",()=>(console.log('server is running...'))) //server

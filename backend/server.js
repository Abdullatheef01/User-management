const express=require('express') //import
const cors=require('cors')
const app=express()
require('../backend/config/db')
const routes=require('../backend/routes/userRoutes')
app.use(cors()) //middleware
app.use(express.json())
app.use('/',routes)
app.listen(3000,()=>(console.log('server is running...'))) //server

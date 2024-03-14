const express=require('express')
const app=express()
const env=require('dotenv').config()
const client = require('./connectionDB.js')
const cors = require('cors')
 
app.use(cors())

client.connect();

const useRoute=require('./Routers')

app.use('',useRoute)



app.listen(process.env.PORT1 || 3000,()=> console.log(`listening @ ${process.env.PORT1 || 3000}`))
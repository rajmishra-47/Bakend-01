const express=require('express')

const router=express.Router()

const controller=require('./controller')


router.get('/show',controller.get)


module.exports=router
const express=require('express')

const router=express.Router()

const controller=require('./controller')


router.get('/showWell',controller.get1)

router.get('/showRes',controller.get2)

router.post('/updateWell/:a/:b',controller.post1)

router.post('/updateRes/:a/:b',controller.post2)


module.exports=router
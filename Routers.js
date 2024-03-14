const express=require('express')

const router=express.Router()

const controller=require('./controller')


router.get('/showWell',controller.get1)

router.get('/showRes',controller.get2)

router.post('/postWell/:a/:b',controller.post1)

router.post('/postRes/:a/:b',controller.post2)


module.exports=router
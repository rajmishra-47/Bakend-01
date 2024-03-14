const express=require('express')

const router=express.Router()

const controller=require('./controller')


router.get('/showWell',controller.getWellData)

router.get('/showRes',controller.getResData)

router.put('/postWell/:a/:b',controller.putWellData)

router.put('/postRes/:a/:b',controller.putResData)


module.exports=router
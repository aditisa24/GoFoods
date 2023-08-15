const express = require('express')
const { model } = require('mongoose')
const router = express.Router() 

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.food_items, global.food_category])
        
    } catch (error) {
        console.error(error.message)
        res.send("server error ")
    }
})

module.exports = router;
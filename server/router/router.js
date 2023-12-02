const express = require('express')
const app = express.Router()
const userModel = require('../schema/userSchema')

app.post('/signup',async(req,res)=>{
    let result = new userModel(req.body)
    result = await result.save()
    res.send(result)
})


module.exports = app;
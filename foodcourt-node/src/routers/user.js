const express = require('express')
const router = new express.Router()
const User = require('../models/userModel')


router.post('/users', async (req,res) => {
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send({user})
    } catch(e){
        res.status(500).send(e)
    }
})


router.get('/users/:email', async(req, res) => {
    const userEmail = req.params.email

    try{
        const user = await User.findOne({ email: userEmail}) 
        res.send(user)
    } catch(e){
        res.status(500).send(e)
    }
})

router.get('/users', async(req, res) => {
    try{
        res.send(await User.find({}))
    } catch(e){
        res.status(500).send(e)
    }
})


module.exports = router
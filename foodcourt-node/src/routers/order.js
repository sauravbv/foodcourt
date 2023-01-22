const express = require('express')
const Order = require('../models/orderModel')
const router = new express.Router()


router.post('/orders', async (req,res) => {
    const order = new Order(req.body)

    try{
        await order.save()
        res.status(201).send(order)
    } catch(e){
        res.status(500).send(e)
    }
})

router.get('/orders', async(req,res) => {
    try{
        
        res.send(await Order.find({}))
    } catch(e){
        res.status(500).send(e)
    }
})

router.put('/orders-status/:id', async(req, res) => {
    try{
        const order = await Order.findById(req.params.id)
        order.status = req.query.status

        await order.save()
        res.send('Status changed')

    } catch(e) {
        res.status(500).send(e)
    }
}) 

router.get('/orders/user/:email', async(req, res) => {
    try{
        const orders = await Order.find({ 'userId.email' : req.params.email } ).limit(1)
        res.send(orders)

    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router

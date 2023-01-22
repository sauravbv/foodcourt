const express = require('express')
const router = new express.Router()
const Item = require('../models/itemModel')


router.post('/items', async (req, res) => {
    const item = new Item(req.body)

    try{
        await item.save()
        res.status(201).send(item)
    } catch(e){
        res.status(500).send(e)
    }
})

router.get('/items', async(req, res) => {
    try{
        res.send(await Item.find({}))
    } catch(e){
        res.status(500).send(e)
    }
})

router.patch('/items', async(req, res) => {
    
    try{
        const item = await Item.findById(req.body._id)
        // item = req.body
        item.name = req.body.name
        item.description = req.body.description
        item.cost = req.body.cost
        item.spice = req.body.spice
        item.isVegan = req.body.isVegan
        item.availability = req.body.availability

        await item.save()
        res.send(item)
    } catch(e){
        res.status(500).send(e)
    }
})

router.delete('/items/:id', async(req, res) => {
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.send('Item deleted')
    } catch(e){
        res.status(500).send(e)
    }
})

router.patch('/items/:id', async(req, res) => {
    
    try{
        const item = await Item.findById(req.params.id)

        item.availability = req.query.availability

        await item.save()
        res.send(item)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router

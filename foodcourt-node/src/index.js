const express = require('express');
const app = express()
const userRouter = require('./routers/user')
const itemRouter = require('./routers/item')
const orderRouter = require('./routers/order')

const port = process.env.port || 3000

app.get('/testhello', async (req, res) => {
    res.send('Hello foodcourt')
})


app.use(express.json())
app.use(userRouter, itemRouter,orderRouter)

app.listen(port, () => console.log(`App is running in port ${port}`))


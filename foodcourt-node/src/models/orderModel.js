const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb://127.0.0.1:27017/foodcourt')

const orderSchema = mongoose.Schema({
        status: {
            type: String,
            default: 'Waiting for confirmation',
            trim: true
        },
        items: {
            type: [Schema.Types.Mixed],
            required: true,
            validate(value){
                if(value.length === 0) throw new Error('There are no items in order')
            }
        },
        userId: {
            type: Schema.Types.Mixed,
            required: true,
            trim: true
        },
    },    
    { timestamps: true }
)

const Order = new mongoose.model('Order', orderSchema )

module.exports = Order

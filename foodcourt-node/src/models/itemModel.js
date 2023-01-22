const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/foodcourt')

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        unique: true,
        validate(value){
            if(value.length > 30) throw new Error('Name cannot be greater than 30 characters')
        }
    },
    description: {
        type: String,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },
	spice: {
        type: Number,
        trim: true,
        default: 1,
        validate(value){
            if(value > 3){
                throw new Error('Spice level cannot be more than 3')
            } else if(value < 1){
                throw new Error('Spice level cannot be less than 1')
            }
        }
    },
	isVegan: {
        type: Boolean,
        default: false
    },
    availability:{
        type: Boolean,
        default: true
    }

})

const Item = new mongoose.model('Item', itemSchema )

module.exports = Item

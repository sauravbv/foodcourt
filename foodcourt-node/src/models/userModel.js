const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/foodcourt')

const userSchema = new mongoose.Schema({
	name: {
        type: String, 
        required: true,
        trim: true,
    },
	email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email')
            }
        }
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User


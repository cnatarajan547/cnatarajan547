const mongoose = require('mongoose')

const user = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type_of_user: {
        type: String,
        required: true
    },
    jwtToken: {
        type: String
    },
    mobile_number: {
        type: Number
    },
    address: {
        type: String
    },
    car_details: [{
        slotNumber: {
            type: Number,
            required: true
        },
        carNumber: {
            type: String,
            required: true
        }, 
        model: {
            type: String
        },
        color: {
            type: String
        }
    }]
})

const userModule = mongoose.model('User_Collection', user)
module.exports.user = userModule;

const mongoose = require('mongoose');

const money = mongoose.Schema({
    ownerName:{
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type:  Date
    },
    colletedBy: {
        type: String
    }
});

const moneyModules = mongoose.model('money', money);
module.exports.Money = moneyModules;
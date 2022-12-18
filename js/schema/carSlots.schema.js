const mongoose = require('mongoose');

const carSlots = mongoose.Schema({
    SlotNumber:{
        type: Number,
        required: true,
        unique: true
    },
    carNumber: {
        type: String
    },
    OwnerName: {
        type: String
    },
    mobile_number: {
        type: Number
    },
    isFree : {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const carModules = mongoose.model('carParking_Slots', carSlots);
module.exports.carSlots = carModules;
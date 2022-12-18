const express = require('express');
router = express.Router();

const carSlotsService = require('../services/carSlots.service');

router.post('/carSlots', async (req, res)=>{
carSlotsService.addcarSlots(req, res)
});

router.get('/getAllSlots', async (req, res)=>{
    carSlotsService.getcarSlots(req, res)
})


router.get('/getemptySlots', async (req, res)=>{
    carSlotsService.getEmptySlots(req, res)
})

router.get('/getemptySlotsNumber', async (req, res)=>{
    carSlotsService.getEmptySlotsNumbers(req, res)
})

router.delete('/carSlots/:slotNumber', async (req, res)=>{
carSlotsService.deletecarSlots(req, res)
});

router.get('/insert-custom-slots/:number', (req, res)=>{
    carSlotsService.insertCustomSlots(req, res)
});

router.get('/get-total-amount', async (req, res)=>{
    carSlotsService.getTotalAmount(req, res)
})

module.exports = router
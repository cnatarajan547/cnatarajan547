const {carSlots } = require('../schema/carSlots.schema')
const {addcarSlots, getcarSlots, deletecarSlots, getEmptySlots, getEmptySlotsNumbers, insertCustomSlots, getTotalAmount} = require('../model/carSlots.module')

exports.addcarSlots = async (req, res)=>{
    try{
         const data = req.body;
         const result = await addcarSlots(data)
         return res.status(200).json({message: result, status: 200})
    } catch(err){
        res.status(400).json({message: err, status: 400})
    }
};

exports.getcarSlots = async (req, res)=>{
    try{
          const result = await getcarSlots();
          return res.status(200).json({message: result, status: 200})
    }catch(err){
        console.log('err', err)
        res.status(400).json({message: err, status: 400})
    }
}


exports.getEmptySlots = async (req, res)=>{
    try{
          const result = await getEmptySlots();
          return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err, status: 400})
    }
}


exports.getEmptySlotsNumbers = async (req, res)=>{
    try{
          const result = await getEmptySlotsNumbers();
          return res.status(200).json({message: result, status: 200})
    }catch(err){
        console.log('err', err)
        res.status(400).json({message: err, status: 400})
    }
}

exports.deletecarSlots = async (req, res)=>{
    try{
         const  SlotNumber = req.params.slotNumber
         const colletedBy =  req.body.colletedBy 
         const Amount = req.body.Amount
         const result = await deletecarSlots(SlotNumber, colletedBy, Amount)
         return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err.message, status: 400})
    }
}

exports.insertCustomSlots = async (req, res)=>{
    try{
        const result = await insertCustomSlots(req.params.number);
        return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err.message, status: 400})
    }

}

exports.getTotalAmount= async (req, res)=>{
    try{
          const result = await getTotalAmount();
          return res.status(200).json({message: result, status: 200})
    }catch(err){
        console.log('Error', err)
        res.status(400).json({message: err.message, status: 400})
    }
}
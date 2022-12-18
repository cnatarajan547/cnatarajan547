const {money} = require('../schema/money.schema');
const {getAllMoney, getAllParkingDetails} = require('../model/admin.module')

exports.getAllMoney = async (req, res)=>{
    try{
        const name = req.params.name
        const startDate = req.body.startDate
        const endDate = req.body.endDate
          const result = await getAllMoney(name,  startDate, endDate);
          return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err.message, status: 400})
    }
};

exports.getAllParkingDetails = async (req, res)=>{
    try{
        const isFree = req.body.isFree
         const result = await getAllParkingDetails(isFree)
         return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message:err.message, status: 400})
    }
};
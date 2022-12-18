const {user} = require('../schema/user.schema');

const {addRegister, addLogin} = require('../model/userRegister.module');

exports.addRegister = async (req, res)=>{
    try{
         const data = req.body;
         const result = await addRegister(data);
         return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err.message, status: 400})
    }
};

exports.addLogin = async (req, res)=>{
    try{
         const data = req.body;
         const result = await addLogin(data);
         return res.status(200).json({message: result, status: 200})
    }catch(err){
        res.status(400).json({message: err.message, status: 400})
    }
}
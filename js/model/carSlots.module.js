const {carSlots} = require('../schema/carSlots.schema')
 const {Money} = require('../schema/money.schema')
const mongoose = require('mongoose')

async function addcarSlots(data) {
    const isDuplicate = await carSlots.findOne({'SlotNumber': data.SlotNumber, 'isFree' : true })
    if(isDuplicate) {
        return 'alredy there duplicated'
 };

    data.isFree = true;
    data.createdAt = new Date()

    // data.createdAt = new Date
    // data.createdAt = new Date()
    // return  await carSlots.findOneAndUpdate({"SlotNumber" : data.SlotNumber}, {'$set' : data}, {new: true})
    const insertcarSlots = await new carSlots(data);
    return await insertcarSlots.save();
}


async function getcarSlots() {
    const result = await carSlots.find();
    return result; 
}


async function getEmptySlots() {
                                      // createdAt: {$eq:}
    const result = await carSlots.find({"isFree": false});
    // const result = await carSlots.count({"isFree": false});
    return result; 
}



async function getEmptySlotsNumbers() {
    
    const result = await carSlots.find({"isFree": false});
    console.log('result', result)
    const sloatNumber = []
    result.map((each) => {
        sloatNumber.push(each.SlotNumber)
    })
    return sloatNumber; 
    // const result = await carSlots.find({"isFree": false}, {"SlotNumber": 1, "_id":0})
    //        return result  
}


async function deletecarSlots(SlotNumber, colletedBy, Amount) {
    //disending order
    var mysort = { Amount: -1 };
    const parkingDetails = await carSlots.findOne({"SlotNumber" :SlotNumber}).sort(mysort)
       //  adding money
       const inserMoney = await new Money({ownerName: parkingDetails.OwnerName , Amount: Amount, colletedBy:colletedBy, SlotNumber:SlotNumber,createdAt:new Date}) 
       console.log('SlotNumber', SlotNumber, 'colletedBy', colletedBy, 'Amount', Amount, 'ownerName')
       await inserMoney.save() 

    parkingDetails.carNumber = ""
    parkingDetails.OwnerName = ""
    parkingDetails.mobile_number = ""
    parkingDetails.isFree = false
    return await carSlots.findOneAndUpdate({"SlotNumber" :SlotNumber}, {'$set' : parkingDetails}, {new: true})
    
};
    
async function insertCustomSlots (number) {
    const newSlots = {
        carNumber: "",
        OwnerName: "",
        OwnerName:"",
        isFree: false,
    }
    try {
        const insertedData = []
        for(let i=0; i < number; i++){
           
            newSlots.SlotNumber = i +200
           const insert = new carSlots(newSlots)
           insertedData.push(await insert.save())
        }
        return insertedData
    } catch (err) {
        console.log('test', err)
        return err
    }

    //    newSlots = {
    //     carNumber : "",
    //     OwnerName : "",
    //     mobile_number : "",
    //     isFree : false,
    //    }
    //    try{
    //         const insertedData = []
    //         for(let i=0; i<number; i++){

    //             newSlots.SlotNumber = i;
    //             const insert = new carSlots(newSlots)
    //             insertedData.push(await insert.save())
    //         } 
    //         return insertedData
    //    }catch(err){
    //     console.log('test', err)
    //     return err
    //    }

}  

async function getTotalAmount() {
    //  const result = await Money.find();
    //  console.log('money', result)


    // let totalmoney = 0;
    // for(let i=0; i< result.length; i++){
    //     console.log('test',result[i])
    //     totalmoney += result[i].Amount
    // }
    //   return totalmoney
   
       const result = await Money.find()
    //    return result

    var totalMoney = 0;
    for(let i=0; i<result.length; i++){
        totalMoney += result[i].Amount
    }
    return totalMoney



}


module.exports = {
    addcarSlots, getcarSlots, deletecarSlots,getEmptySlots, getEmptySlotsNumbers, insertCustomSlots, getTotalAmount
}
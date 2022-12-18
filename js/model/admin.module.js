const {Money} = require('../schema/money.schema');
const {carSlots} = require('../schema/carSlots.schema')

async function getAllMoney(name, startDate, endDate) {
    let result = []
    const query = ''
    // return result
    if(email) {
        result =   await Money.find({'email_id': email, 'createdAt': {'$gte': new Date(startDate), '$lte': new Date(endDate)}});
    }else if (name) {
        result =  await Money.find({'colletedBy': name, 'createdAt': {'$gte': new Date(startDate), '$lte': new Date(endDate)}});
    } else {
        console.log('test', startDate, endDate)
        result = await Money.find({'createdAt': {'$gte': new Date(startDate), '$lte': new Date(endDate)}});
    }


    var totalAdminMoney = 0;
    for(let i=0; i<result.length; i++){
        totalAdminMoney += result[i].Amount
    }

    return `AdminTotalMoney ${totalAdminMoney}`
};

async function getAllParkingDetails(isFree) {
    const result = await carSlots.find({'isFree': isFree})
    return result
}

module.exports = {
    getAllMoney, getAllParkingDetails   
}
const { user } = require("../schema/user.schema");
const bcrypt = require('bcrypt');
const { genSaltSync } = require("bcrypt")
const { default: mongoose } = require('mongoose');



async function addRegister(data) {
    const {username, password, email, type_of_user, jwtToken, mobile_number, address,car_details, Admin_Token, Employee_Token} = data;
    if(!username || !password || !email){
        throw new Error ('You need to Pass All Values')
    };

    if(!email.includes('@gmail.com')){
        throw new Error ('Need to send Proper email')
    };

    if(password.length > 10000 || password.length < 5){
        throw new Error ('Password must be greter then 5 and lessthen 10000')
    }

    const userRegister = await user.findOne({email});
    if(userRegister){
        throw new Error('User allready Register')
    }

    if(type_of_user == 'Admin'){
        if(Admin_Token !=10){
            throw new Error('Incorrect Admin token Number')
        }
    }

    if(type_of_user == 'Employee'){
        if(Employee_Token !=5){
            throw new Error('Incorrect Employee Token Number')
        }
    }

    var salt = await bcrypt.genSaltSync(10)
    var hash = await bcrypt.hashSync(password, salt)

    const newUserRegister = await new user({
        username,
        hash,
        email,
        type_of_user,
        jwtToken,
        mobile_number,
        address,
        car_details
    });
    const result = await newUserRegister.save();
    return result
};
// Login API

async function addLogin(data) {
    const {email, password} = data;

    if(!email || !password){
        throw new Error('You Need to pass All Values')
    }

     if(!email.includes('@gmail.com')){
        throw new Error('You Need to Send Proper eamil Id')
     }

     if(password.length > 1000 || password.length < 5){
        throw new Error('Password must be Greater then 1000 and less then 5')
     }

   const userLogin = await user.findOne({email});
   if(!userLogin){
       throw new Error ('User Not Exists')
   }
    
   const hash = await bcrypt.compare(password, userLogin.hash)
       if(!hash){
        throw new Error('Incorrect Password')
    };
    
        return 'Logged in Successuflly'
}


module.exports = {
    addRegister, addLogin  
}
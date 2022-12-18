const express = require('express');
router = express.Router();


const userRegisterService = require('../services/userRegister.service');

router.post('/user/registe', async (req, res)=>{
userRegisterService.addRegister (req, res)
});

router.post('/user/login', async (req, res)=>{
userRegisterService.addLogin (req, res)
});


module.exports = router;
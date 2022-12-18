
// get all money (filters money with employee name, range of date, sorting)
// get all parking details in monthly bases
const { Router } = require("express");
const adminService = require('../services/admin.service')



const express = require('express')
router = express.Router();

router.get('/getAllMoney/:name', async (req, res)=>{
adminService.getAllMoney (req, res)
});

router.get('/getAllParkingDetails', async (req, res)=>{
adminService.getAllParkingDetails (req, res)
});

module.exports = router;

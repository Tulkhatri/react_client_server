//import the products
const express = require('express')
const router = express.Router();
const Products = require('../models/User')

router.post('/register', async(req, res) => {
    try{
      const data = await Products.create(req.body)
    if(data){
        res.json({msg: "user is added"})
    }else{
        res.json({msg: "something went wrong"})
    }
    }catch(err){
        console.log(err)
    }
 })
 
 module.exports = router;

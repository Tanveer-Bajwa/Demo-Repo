import express from "express";
const router = express.Router();
import transactionModel from "../../models/Transaction/AddTransaction.js"


router.post("/",async(req,res)=>{

    try {
    const data = await transactionModel.create(req.body);
    res.status(200).json(data);}
    catch(err){
        res.json({message:err});
    }
})

router.get("/",async(req,res)=>{

    try {
    const data = await transactionModel.find();
    res.status(200).json(data);}
    catch(err){
        res.json({message:err});
    }
})


export default router;
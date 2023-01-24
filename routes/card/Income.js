import express  from "express"; 
const router = express.Router();
import IncomeModel from "../../models/card/Income.js";
router.post ("/", async (req,res)=>{
    try{

    const data = await IncomeModel.create(req.body);
    res.status(200).json(data);
    } catch(err){
        res.json({message:err});
    }
});


router.get ("/:id", async (req,res)=>{
    try{
  
    const data = await IncomeModel.findById(req.params.id);
    res.status(200).json(data);
    } catch(err){
        res.json({message:err});
    }
  });


export default router;
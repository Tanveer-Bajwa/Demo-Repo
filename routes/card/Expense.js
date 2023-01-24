import express  from "express"; 
const router = express.Router();
import expenseModel from "../../models/card/Expense.js";
router.post ("/", async (req,res)=>{
    try{

    const data = await expenseModel.create(req.body);
    res.status(200).json(data);
    } catch(err){
        res.json({message:err});
    }
});

router.get ("/:id", async (req,res)=>{
    try{
  
    const data = await expenseModel.findById(req.params.id);
    res.status(200).json(data);
    } catch(err){
        res.json({message:err});
    }
  });


export default router;
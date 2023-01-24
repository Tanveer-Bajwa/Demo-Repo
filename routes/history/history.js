import express from "express";
const router = express.Router();
import transactionModel from "../../models/Transaction/AddTransaction.js"


router.get("/",async(req,res)=>{

    try {
    const data = await transactionModel.find();
    res.status(200).json(data);
}
    catch(err){
        res.json({message:err});
    }
})

router.delete("/:id", async (req, res) => {
    try {
      const data = await transactionModel.findByIdAndDelete(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      res.json({ message: err });
    }
  });


export default router;
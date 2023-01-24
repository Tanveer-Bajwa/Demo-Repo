import express  from "express"; 
import multer from "multer";
import BalanceModel from "../../models/card/Balance.js";
import upload from "../multer.js";
const router = express.Router();




router.post ("/", async (req,res)=>{
    try{
    const data = await BalanceModel.create(req.body);
    res.status(200).json(data);
    } catch(err){
        res.json({message:err});
    }
});


router.post("/upload", upload.single("file"), (req, res) => {
  let link;
  if (req.file) link = `${req.protocol}://${req.get("host")}/${req.file.path}`
  else link = null;
  res.send({message : "Image has been uplaoded",link});

console.log("Image uploaded",link)
});



router.get ("/:id", async (req,res)=>{
  try{

  const data = await BalanceModel.findById(req.params.id);
  res.status(200).json(data);
  } catch(err){
      res.json({message:err});
  }
});

export default router;
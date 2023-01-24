import express  from "express"; 
const router = express.Router();
import SignInModel from "../models/SignIn.js";
import SignUpModel from "../models/SignUp.js";
import jwt from "jsonwebtoken";
import authenticate from "../middleware/authenticate.js";
// router.post ("/", async (req,res)=>{
   
// })


router.get("/:id", authenticate, async(req, res) => {
    const data = await SignUpModel.findById(req.params.id);
    res.json({ message: "Welcome to the API" , data });
});


router.post("/",async (req, res) => {
    
    const data = await SignInModel.create(req.body);
        // res.status(200).json(data);
        //res.json({message:"error"});
    const secret = "my-secret"
    const { email, password } = req.body;
      if (email && password) {
          const payload = {};
          const token = jwt.sign(payload, secret, { expiresIn: "1h" });
          res.json({ token, data });
          console.log({token,data});
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
        
    });








export default router;
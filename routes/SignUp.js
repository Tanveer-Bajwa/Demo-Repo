import express from "express";
const router = express.Router();
import SignUpModel from "../models/SignUp.js";
import authenticate from "../middleware/authenticate.js";
import jwt from "jsonwebtoken";

router.post("/",async (req,res)=>{

    const data = await SignUpModel.create(req.body);
    const secret = "my-secret"
    const { email } = req.body;
      if (email) {
          const payload = {};
          const token = jwt.sign(payload, secret, { expiresIn: "1h" });
          res.json({ token, data });
          console.log({token,data});
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    //res.status(200).json(data);
        
})

router.get("/",async (req,res)=>{
    try{
        const data = await SignUpModel.find(req.body);
        console.log(data);
        res.status(200).json(data)
    }
    catch(err){
        res.json({ message: err })
    }
    })

    router.get("/api", authenticate, (req, res) => {
        res.json({ message: "Welcome to the API" });
      });


    // router.post("/login", (req, res) => {
    //   const secret = "my-secret"
    //     const { email, password } = req.body;
    //     if (email && password) {
    //       const payload = {};
    //       const token = jwt.sign(payload, secret, { expiresIn: "1h" });
    //       res.json({ token });
    //       console.log({token});
    //     } else {
    //       res.status(401).json({ message: "Invalid credentials" });
    //     }
    //   });

export default router;
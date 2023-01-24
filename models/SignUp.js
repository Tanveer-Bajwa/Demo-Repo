import mongoose from "mongoose";
const schema = mongoose.Schema({
First_Name :{type:String, require:true},
Last_Name :{type:String, require:true},
email :{type:String, require:true},
Password : {type:String, require:true},
DOB :{type:String}
})
const SignUpModel = mongoose.model("SignUp", schema);

export default SignUpModel;
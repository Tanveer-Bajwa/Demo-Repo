import mongoose from "mongoose";

const schema = mongoose.Schema({
    email : { type: String, require :true},
    password : { type : String , require : true}
})
const SignInModel = mongoose.model("SignIn" , schema);
 export default SignInModel;
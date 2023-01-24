import mongoose from "mongoose";

const schema = mongoose.Schema({
  Balance: { type: String, required: true },
  Rupees: { type: Number, required: true },
 
});

const BalanceModel = mongoose.model("Balance", schema);

export default BalanceModel;
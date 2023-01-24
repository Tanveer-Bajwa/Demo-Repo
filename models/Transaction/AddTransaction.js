import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
 
});

const transactionModel = mongoose.model("Transaction", schema);

export default transactionModel;


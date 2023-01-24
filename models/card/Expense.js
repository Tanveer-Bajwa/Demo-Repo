import mongoose from "mongoose";

const schema = mongoose.Schema({
  Expense: { type: String, required: true },
  Rupees: { type: Number, required: true },
 
});

const expenseModel = mongoose.model("Expense", schema);

export default expenseModel;
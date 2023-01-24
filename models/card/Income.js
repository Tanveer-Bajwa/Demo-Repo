import mongoose from "mongoose";

const schema = mongoose.Schema({
  Income: { type: String, required: true },
  Rupees: { type: Number, required: true },
 
});

const incomeModel = mongoose.model("Income", schema);

export default incomeModel;
import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bookRouter from "./routes/book.js";
import SignUpRouter from "./routes/SignUp.js";
import SignInRouter from "./routes/SignIn.js";
import balanceRouter from "./routes/card/Balance.js";
import expenseRouter from "./routes/card/Expense.js";
import incomeRouter from "./routes/card/Income.js";
import transactionRouter from "./routes/Transaction/AddTransaction.js"
import historyRouter from "./routes/history/history.js"
import IconRouter from "./routes/card/Balance.js"
//import authenticate from "./middleware/authenticate.js"
const app = express();
app.use(bodyparser.json());
app.use(cors());
mongoose.set('strictQuery', false);
const connect  = mongoose.connect("mongodb://127.0.0.1:27017/bookDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.set('strictQuery', false);
if(connect) console.log("Database Connected ~");
if(!connect) console.log("Database error: ");

//app.use("/api", authenticate)
app.use("/book", bookRouter);
app.use("/SignUp", SignUpRouter);
app.use("/SignIn",SignInRouter);
app.use("/balance",balanceRouter);
app.use("/expense",expenseRouter);
app.use("/income",incomeRouter);
app.use("/transaction",transactionRouter);
app.use("/history",historyRouter);
app.use("/upload",IconRouter, express.static("public"));

// async function fn1() {
//   console.log("Calling Async")
//   try {
//     console.log("Calling Async")
//   //  const connection =  await mongoose.connect('mongodb://127.0.0.1:27017/bookDatabase');
//     // if(connection) console.log("Database Connected...")
//   } catch (error) {
//     console.log(error)
//     handleError(error);
//   }
// }
// fn1();
// const connection = mongoose.connection;

app.listen(9999);
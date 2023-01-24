import express from "express";
const router = express.Router();
import bookModel from "../models/book.js";

router.get("/", async (req, res) => {

  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await bookModel.create(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const result = await bookModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({result});
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
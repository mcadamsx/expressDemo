const express = require("express");
const mongoose = require("mongoose");
const users = require("./model/users.model");
const app = express();

require('dotenv').config()

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/api/users', async (req,res)=>{
    try {
        const Users = await users.find({})
        res.status(200).json(Users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post("/api/users", async (req, res) => {
  try {
    const Users = await users.insert(req.body);
    res.status(200).json(Users);
  } catch (error) {
    res.status(404).json({ message: message.error });
  }
});

mongoose
  .connect("mongodb://localhost:27017/EWA-Backend")
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
  })
  .catch(() => {
    console.error("can not connect ot database");
  });


const express = require('express')
const Joi = require("joi")
const app = express();



app.get("/api", (req,res)=>{
  res.send("Helo World")
})


app.post("/api", (req, res)=>{
  const {error} = validateName(req.body);
  if(error) return res.status(400).send(error.details[0].message)
  
})











function validateName(name){
  const schema = {
    name: Joi.string().min(3).required()
  }

  return Joi.valedate(name, schema)
}



const port = process.env.PORT || 4000
app.listen(port, ()=>console.log(`Listening to port ${port}`))
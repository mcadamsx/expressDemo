const express = require('express');
const app = express();
const userModel = require("../models/users.model");


const usersControllers = {
  getAllUsers: async(request, response) => {
    try {
      const User = await userModel.find({});
      response.status(200).json(User);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  },
  getUserById: async(request, response)=>{
    try {
      const{id} = request.params;
      const user =  await userModel.findById(id)
      response.status(200).json(user)
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  },
  createUsers:async (request, response) => {
    try {
      const User = await userModel.create(request.body);
      response.status(200).json(User);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  },
  updateUsers: async(request, response)=>{
    try {
      const {id} = request.params
      const User = await userModel.findByIdAndUpdate(id, request.body)
      if(!User) console.log("unable to find user");
      const updatedUser  = await userModel.findById(id)
      response.status(200).json(updatedUser);      
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  },
  deleteUsers: async(request, response)=>{
    try {
      const {id} = request.params
      const User = await userModel.findByIdAndDelete(id, request.body)
      if(!User) console.log("unable to find user");
      const updatedUser  = await userModel.find({})
      response.status(200).json(updatedUser);      
    } catch (error) {
      
      response.status(404).json({ message: error.message });
    }
  },


};

module.exports = usersControllers;

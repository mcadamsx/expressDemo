const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter fullname name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email name"],
    },
    password: {
      type: String,
      required: [true, "Please enter password name"],
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("user", UsersSchema);
module.exports = Users;
  
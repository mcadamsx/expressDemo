const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
    email:{
        type: String,
        required: [true, "Please enter email"]

    },
    password:{

        type: String,
        required: [true, "Please enter password"]
    }
},
{
    timestamps: true
}
)


const users = mongoose.model('user', userSchema);

module.exports = users;
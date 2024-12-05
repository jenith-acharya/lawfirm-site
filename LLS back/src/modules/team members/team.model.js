const mongoose = require("mongoose")

const TeamSchema= mongoose.UserSchema({
    name:{
        type: String,
        required:true
        },
    
    image:{
        type:String,
        required:true
    },

    phone:{
        type: Number,
        required:true
    },

    email:{
        type: String,
        unique: true
    },

    slug:{
        type: String,
        required: true
    },
    activationtoken: String,
    activationfor: Date,
    forgettoken: String,
    forgetfor: Date,
    createdby: String  
    },
    {
    timestamps:true,
    autoIndex: true,
    autoCreate: true
    
});

const TeamModel = mongoose.model("Team", TeamSchema)

module.exports = TeamModel




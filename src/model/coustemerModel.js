const mongoose = require("mongoose");
const custemerSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique :true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    totalOrders:{
        type:Number,
        default:0
    },
    cashBackamount:{
        type:Number,
        default:0

    },
    category:{
        type:String,
        enum:["Regular","Gold","Platinum"],
        default:"Regular"
    },
},{timestamps:true});

module.exports=mongoose.model("custemer",custemerSchema)


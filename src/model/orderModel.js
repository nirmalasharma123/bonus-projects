const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    productName:{
        type:String,
        require:true
    },
    custemerId:{
        type:objectId,
        ref:"custemer"
    },
    productPrice:{
        type:Number,
        required:true
    }
},{timestamps:true
})

module.exports=mongoose.model("order",orderSchema)
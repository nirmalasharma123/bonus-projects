const orderModel= require("../model/orderModel");
// creatOrder = require("../model/couatemerModel.js");
const coustemerModel = require("../model/coustemerModel");


const OrderCreat= async function(req,res){
    try{
    let data= req.body;
   let {productName,productPrice,custemerId}= data;

   if(!productName) return res.status(400).send({status:false,message:"product name mendatory"})
   if(!custemerId) return res.status(400).send({status:false,message:"please provide customer id"})
   if(!productPrice) return res.status(400).send({status:false,message:"product price mendatory"})
   

    let findCoustemer= await coustemerModel.findOneAndUpdate({_id:custemerId},{$inc:{totalOrders:1}},{new:true});
    if(!findCoustemer) return res.status.send({status:false,message:"coustemer not found"})
    if(findCoustemer.totalOrders==9) return res.send({status:false,message:"you need to place more order to become a Golden user"});
    if(findCoustemer.totalOrders==19) return res.send({status:false,message:"you need to place more order to become a platinum user"});

  
    let creatProducts = await orderModel.create(data)

    if(findCoustemer.totalOrders<10){
        await coustemerModel.findOneAndUpdate({_id:custemerId},{$inc:{totalOrders:1}});

    };
    if(findCoustemer.totalOrders>=10 && findCoustemer.totalOrders<20){
         let cashBackamount= productPrice *0.10;
         await coustemerModel.findOneAndUpdate({custemerId:custemerId},{cashBackamount:cashBackamount,category:"gold"},{new:true})
    };
    if(findCoustemer.totalOrders>=20 ){
        let  cashBackamount= productPrice*0.20;
        await coustemerModel.findOneAndUpdate({custemerId:custemerId},{cashBackamount:cashBackamount,category:"platinum"},{new:true})

    }
    
    return res.status(201).send({status:true,message:"order creat sucessfully",data:creatProducts})

}catch(erro){

    return res.status(500).send({status:false,message:erro.message})
}


}
module.exports={OrderCreat}

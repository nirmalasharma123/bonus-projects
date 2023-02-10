const coustemerModel = require("../model/coustemerModel");
const custemerModel= require("../model/coustemerModel");

const creatCustemer= async function(req,res){
    try{
    let data= req.body;
     if(Object.keys(data).length==0) return res.status(400).send({status:false,message:"no data given"});


     let findUser = await custemerModel.findOne({$or:[{email:data.email },{phone:data.phone}]});
      if(findUser) { 
        if(findUser.email==data.email) return res.status(400).send({status:false,message:"email  already present"})
        if(findUser.phone==data.phone) return res.status(400).send({status:false,message:"phone  already present"})
      }

      let creatUser= await coustemerModel.create(data);

      return res.status(201).send({status:true,data:creatUser})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
     
}
 let loginUser= async  function (req,res){
        
    let email=req.body.email
  
 }



module.exports={creatCustemer}
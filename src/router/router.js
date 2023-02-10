const express= require("express");
const router= express.Router();
const custemerController=require("../controller/coustemer");
const orderController = require("../controller/order")

router.post("/custemer",custemerController.creatCustemer);
router.post("/creatOrder",orderController.OrderCreat)

module.exports=router
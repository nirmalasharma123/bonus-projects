const express= require("express");
const mongoose= require("mongoose");
let router = require("./router/router")
let app= express();
app.use(express.json());

mongoose.connect("mongodb+srv://jassu_172:jassusharma123@cluster0.fhbdfgf.mongodb.net/springboot", {
    useNewUrlParser: true
})
.then(()=>console.log("mongo is connected"))
.catch((error)=>error.message);

app.use("/",router)
app.listen(3000,function(){
    
    console.log("express is running on port 3000")
});



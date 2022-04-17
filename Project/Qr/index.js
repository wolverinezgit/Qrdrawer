const express=require('express');
const app=express();
const PORT=process.env.PORT||3000;
const bp=require("body-parser");
const qr=require("qrcode");

app.set("view engine","ejs");

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());
app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/scan",(req,res)=>
{
const msg=req.body.message;
 
qr.toDataURL(msg,(err,src)=>{
    if(err)
    res.send("Error Occured");
    
    res.render("scan",{ src });
});
});
app.listen(PORT,()=>console.log("server is running"));
const mongoose=require('mongoose');
const express=require('express');
const bodyparser= require('body-parser');
const app=new express;
const ItemList=require('./app_list');
const cors=require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const PORT = process.env.PORT || 3002;
mongoose.connect('mongodb+srv://pugazh1110:Gr7V9gJXp8RCuDAN@cluster0.cisprxk.mongodb.net/Super-Market').then(()=>{
    console.log('connected')
})

app.get('/api/v1/Item-List/health',function(req,res,next){
    res.send("server is running");
})

app.get('/api/v1/viewlist',async function(req,res,next){
    try{
        const item_list = await ItemList.find();
        res.send(item_list);
    }
    catch(err){
        res.send(err);
    }
})
app.listen(PORT,function(){
    console.log("Server is running")
})

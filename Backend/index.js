var express=require('express');
var cors=require('cors');
var bodyParser=require('body-parser')
var MongoClient=require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectId;


var app=express();
app.use(cors());
var Client=new MongoClient(' mongodb+srv://crudfaq:crudfaq@cluster0.kx8vb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
var connection;
Client.connect((err,db)=>{
    if(!err){
        connection=db;
        console.log("database is connected")
    }
    else
    {
        console.log("database could not connected")
    }
})
app.get('/list-faq',(req,res)=>{
var StudentCollection=connection.db('crud').collection('faq');
StudentCollection.find().toArray((err,docs)=>{
    if(!err){
        res.send({status:"ok" ,data:docs})
    }
    else{
        res.send({status:"failed",data:err})
    }
})
})
app.get('/faq-by-id',(req,res)=>{

    var VendorCollection=connection.db('crud').collection('faq');
    VendorCollection.find({_id:ObjectId(req.query.id)}).toArray((err,docs)=>{
        if(!err){
            console.log(docs)
            res.send({status:"ok" ,data:docs})
        }
        else{
            
            res.send({status:"failed",data:"data is not found"})
        }
    })
    })
app.get('/delete-faq',(req,res)=>{
    var StudentCollection=connection.db('crud').collection('faq');
    StudentCollection.remove({_id:ObjectId(req.query.id)},(err,result)=>{
        if(!err){
            res.send({status:"ok" ,data:"FAQ data is deleted"})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
});
app.post('/create-faq',bodyParser.json(),(req,res)=>{
    
    var VendorCollection=connection.db('crud').collection('faq');
    VendorCollection.insert(req.body,(err,result)=>{
        if(!err){
            res.send({status:"ok" ,result:"user data is inserted"})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})
app.post('/update-faq',bodyParser.json(),(req,res)=>{
    console.log("111")
    var StudentCollection=connection.db('crud').collection('faq');
    console.log("222")
    StudentCollection.update({_id:ObjectId(req.body._id)},{$set:{question:req.body.question,answer:req.body.answer}},(err,result)=>{
        if(!err){
            res.send({status:"ok" ,data:"update data is updated"})
        }
        else{
            res.send({status:"failed",data:err})
        }
    })
})


app.listen(3000,()=>{console.log("server is started on port 3000")})
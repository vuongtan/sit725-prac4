const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const { request } = require('express');
const app = express()
const port = 3000

require("cf-deployment-tracker-client").track()

//Run node as a web server for hosting static files (html)
app.use(express.static(__dirname+"/public"))

app.get('/sayHello',function(req,res){
    var num1=parseInt(req.query.num1)
    res.end("Hello" +num1)
   });
//DB

const uri = "mongodb+srv://tan:123Tingting@sit725.ybkor.mongodb.net/sitboard?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection
client.connect(err => {
   collection = client.db("sitboard").collection("message");
});
const insertMessage=(message)=>{
    collection.insertOne({message:message})
}

app.get('/message',function(req,res){
let message=req.query.message
console.log(message)
insertMessage(message)
res.send('added')
})

app.get('/messages',function(req,res){
retreivemessages(res)
})
const retreivemessages=(res)=>{
        collection.find().toArray(function(err,result){
        if(err) throw err;
        console.log(result)
        res.send(result)
    }) 
}


    




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



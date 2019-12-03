const express = require('express')
const bodyparser = require('body-parser')
const productRoute = require("./routes/product")


var app = express();
app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");// update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyparser.json())
app.use('/product',productRoute)
   
app.get('/',(result,response)=>{
    response.send("this is backstage")

})

app.listen(9898,'0.0.0.0',()=>{
    console.log("server started")
})

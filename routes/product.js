const express = require("express")
const db = require("../db")
const util =require("../utils")
const router = express.Router()

router.get('/',(result,response)=>{
    const connector = db.connect()
    const querry = 'select * from product'

    connector.query(querry,(error,data)=>{
        connector.end()
        response.send(util.createRes(error,data))
    })
})

router.post('/',(req,response)=>{


    const{title,description,price}=req.body
    const connector = db.connect()

    const querry = `insert into product(title,description,price) values ('${title}', '${description}',${price})`

    connector.query(querry,(error,data)=>{
        connector.end()
        response.send(util.createRes(error,data))
    })
})

router.delete('/:id',(req,response)=>{
    var id = req.params.id
    const connector = db.connect()
   
    const querry = `delete from product where id=${id}`

    connector.query(querry,(error,data)=>{
        connector.end()
        response.send(util.createRes(error,data))
    })
})

module.exports = router
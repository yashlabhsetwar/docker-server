const mysql = require('mysql')

function connect()
{
    var connection = mysql.createConnection({
        host:'172.18.5.165',
        user:'root',
        password:'root',
        database:'onshop',
        port:9099
    })
    connection.connect();
    return connection
}

module.exports={
    connect:connect
}
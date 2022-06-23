const express = require("express")
const mongoose = require("mongoose")
const url = "mongodb://localhost/AlieanDBex"

const app = express()
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected.');
})

app.use(express.json())

// For Router Connection
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () =>{
    console.log('Server Connected');
})

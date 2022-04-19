const express = require("express")//Importing Express Library

const app = express ()

const PORT = 3000 

app.listen (PORT,()=>{
    console.log (`Server is listening at http://localhost:${PORT}`)


})

app.get("/api", (request,response) =>{
    response.send ("Hello world")
})
const data = require (".data.json")//Importing Local Json file

app.get ("/api/students", (request, response)=> {
    response.send(data)
})
    
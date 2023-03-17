const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

//console.log(path.joiin(__dirname,'../public'))
const staticPath =path.join(__dirname,'../public');

app.set('vview engine',"hbs");

//app.use(express.static(staticPath))

app.get("",(req,res)=>{
    res.render('index')
})

app.get(route,(req,res)=>{
    res.send("hellow for the express server")
})
app.listen(port, ()=>{
    console.log(`listerning to the port ${port}`)
})
const express=require('express');
const app=express();

app.get('/', (request,response)=> response.send('hello'));




const port= process.env.PORT || 5000

app.listen(port, ()=> console.log("port open "+port));
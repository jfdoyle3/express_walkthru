const express=require('express');
con.st app=express();

app.get('/', (request,response)=> response.send('<h1>hello</h1>'));

app.get ('/test', (res,req)=> res.send('<h1>test route</h1>'))

app.get('/test/:num',(req,res)=> res.send(req.params.num))


const port= process.env.PORT || 5000 

app.listen(port, ()=> console.log( 'App listening on port ${port}'))
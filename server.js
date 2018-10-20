const express=require('express');
const app=express();
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extened: false}))
app.use(bodyParser.json())
app.get('/', (request,response)=> response.send('<h1>hello</h1>'));

app.get ('/test', (req,res)=> res.send('<h1>test route</h1>'))

app.get('/test/:num',(req,res)=> res.send(`<h1>${req.params.num}</h1>`))

app.get('/test/add/:num',(req,res)=> {
    const num=parseInt(req.params.num,10)
    res.send(`<h1>${5+num}</h1>`)
})



app.get('/test/subtract/:num',(req,res)=> {
    console.log(req.query)
    const num=parseInt(req.query.num,10)
    res.send(`<h1>${num-5}</h1>`)
})

app.post('/test/multiply', (req,res)=>{
    const num=parseInt(req.body.num, 10)
    res.json({result: num*5})
})



const port= process.env.PORT || 5000 

app.listen(port, ()=> console.log( `App listening on port ${port}`))
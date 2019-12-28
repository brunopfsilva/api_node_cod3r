const port = 3300

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./src/db') //importa o modulo db.js para este modulo
const app = express();

app.use(bodyParser.urlencoded ({extended: true})) // app.use é um metodo que é sempre chamado no server qnd requisitado 

app.get('/produtos',(req,res,next)=> { //padrao middleware 
   // res.send({nome: 'Notebook',preco: 123.45}) //objecto convertido automatico para json
   res.send(database.getProducts())
})


app.get('/produto/:id',(req,res,next)=> {
     // pega producto pelo id 
    res.send(database.getProduct(req.params.id)) //id recuperado na req 
 })

 app.post('/productos',(req,res,next)=>{
     // dados pego no corpo da requisição
     const producto = database.saveProduct({
         nome: req.body.nome,
         preco: req.body.preco
     })
     res.send(producto) // gera um json
 })

 app.put('/productos/:id',(req,res,next)=>{
    // dados pego no corpo da requisição
    const producto = database.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(producto) // gera um json
})

app.delete('/productos/:id',(req,res,next)=>{
    // dados pego no corpo da requisição
    const producto = database.deleteProduct(req.params.id)
    res.send(producto) // gera um json
})


app.listen(port,()=>{
    console.log(`Executando porta ${port}`)
})
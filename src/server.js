const port = 3300

const express = require('express');
const app = express();


app.get('/produtos',(req,res,next)=> { //padrao middleware
    res.send({nome: 'Notebook',preco: 123.45}) //objecto convertido automatico para json
})


app.listen(port,()=>{
    console.log('Executando')
})


var express = require('express');
var router = express.Router();
const sql = require('../models/pomarcad.model')

router.post('/add',(req,res)=>{
  let dados = req.body.info;
  console.log(dados);
  sql.addPomar(
    dados.nome,
    dados.num_linhas,
    dados.num_colunas,
  ).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})
router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosPomar().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})
module.exports = router;

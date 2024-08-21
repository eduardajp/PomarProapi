var express = require('express');
var router = express.Router();
const sql = require('../models/movimento.model')

router.post('/add',(req,res)=>{
  let dados = req.body.info;
  console.log(dados);
  sql.addMovimento(
    dados.quantidade,
    dados.produto,
    dados.tb_mov_item,
  ).then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(201).json(resposta);
  })
})
router.get('/buscaTodos',(req,res)=>{
  sql.buscaTodosMovimento().then((resposta)=>{
    if(resposta instanceof Error){
      res.status(500).json(resposta);
      return;
    }
    res.status(200).json(resposta);
  })
})
module.exports = router;

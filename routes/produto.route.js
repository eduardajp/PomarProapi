var express = require('express');
var router = express.Router();
const sql = require('../models/produto.model')

router.post('/add',(req,res)=>{
    
    let dados = req.body.info;
  
    sql.addProduto(
      dados.tipo,
      dados.valor,
      dados.descricao,
      dados.unid_medida,
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(201).json(resposta);
    })
  })
  router.get('/buscaTodos',(req,res)=>{
    sql.getProduto().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
  })
  module.exports = router;
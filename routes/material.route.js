var express = require('express');
var router = express.Router();
const sql = require('../models/material.model')

router.post('/add',(req,res)=>{
    
    let dados = req.body.info;
  
    sql.addMaterial(
      dados.nome,
      dados.tipo,
      dados.valor,
      dados.fornecedor,
    ).then((resposta)=>{
      console.log(resposta)
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(201).json(resposta);
    })
  })
  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosMateriais().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
  })
  module.exports = router;
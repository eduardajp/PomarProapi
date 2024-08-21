var express = require('express');
var router = express.Router();
const sql = require('../models/arvore.model');

router.post('/add',(req,res)=>{
    let dados = req.body.info;
  console.log(dados)
    sql.addArvore(
      dados.defensivo,
      dados.fertilizante,
      dados.ultima_verif,
      dados.tb_tipo_id,
      dados.tb_situacao_id
    ).then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
      return;
      }
      res.status(201).json(resposta);
  
    })
  })
  router.get('/buscaTodos',(req,res)=>{
    sql.buscaTodosArvore().then((resposta)=>{
      if(resposta instanceof Error){
        res.status(500).json(resposta);
        return;
      }
      res.status(200).json(resposta);
    })
})
module.exports = router;
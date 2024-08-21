const conexao = require('../database/connection.database');
async function getMovimento(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_mov_item
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function getMovimentoById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_mov_item where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function addMovimento(   
    quantidade,
    produto,
    tb_movimentacao){
        try{
            const [exec] = await conexao.query(`
                insert into tb_mov_item(
                quantidade,produto,tb_movimentacao,
                )values(
                    ?,?,?
                )
            `,[quantidade,
                produto,
                tb_movimentacao])
            return exec.affectedRows;
        }catch(erro){
            return erro;
        }
}
async function buscaTodosMovimento(){
    try{
        let [linha] = await conexao.query(`
            select
                u.quantidade,
                u.produto,
                u.tb_movimentacao
          from tb_mov_item u;
         `)
        return linha;
    }catch(e){
        return e;
    }
}
module.exports ={
    getMovimento,
    getMovimentoById,
    addMovimento,
    buscaTodosMovimento
};
const conexao = require('../database/connection.database');
async function getColheita(){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_colheita
            `)
            return linhas;
    }catch(erro){
        return erro;
    }
}
async function getColheitaById(id){
    try{
        const[linhas] = await conexao.query(`
            select * from tb_colheita where id = ?
            `[id])
            return linhas;
    }catch(erro){
        return erro;
    }
}
async function addColheita( 
    dt_colheita,
    tb_arvore_id){ try{
        const[exec] = await conexao.query(`
            insert into tb_colheita (  
                dt_colheita,
                tb_arvore_id
            )values(
                ?,
                ?
            )
            `,[  dt_moviment,td_tipo_id])
            return exec.affectedRows;
    }catch(erro){
        return erro;
    }
}
async function buscaTodosColheita(){
    try{
        let [linhas] = await conexao.query(`
            select 
          	    u.id,
                u.dt_colheita,
                u.tb_arvore_id
             from tb_colheita  u;
            `)
            return linhas;
    }catch(e){
        return e;
    }
}
module.exports = {
     getColheita,
     getColheitaById,
     addColheita,
     buscaTodosColheita
};
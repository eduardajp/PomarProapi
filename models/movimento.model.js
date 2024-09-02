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
async function addMovimento(tipo,produto,quantidade){
        try{
            const [exec] = await conexao.query(`
                insert into tb_movimentacao(
                    dt_moviment,
                    tb_tipo_id
                ) values(
                    current_timestamp,
                    ?
                )
            `,[tipo])
            if(exec.affectedRows==1){
                const [linha] = await conexao.query(`select last_insert_id() as id`);
                if(linha[0].id){
                    const [exec2] = await conexao.query(`
                            insert into tb_mov_item(
                                tb_movimentacao_id,
                                produto,
                                quantidade
                            ) values(
                                ?,
                                ?,
                                ? 
                            )
                        `,[linha[0].id,produto,quantidade])
                    return exec2.affectedRows;
                }
            }
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
                u.tb_movimentacao_id
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
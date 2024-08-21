const conexao = require('../database/connection.database');
async function getPomar(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_pomar
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function getPomarById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_pomar where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function addPomar(   
    nome,
    tipo,
    num_linhas,
    num_colunas){
        try{
            const [exec] = await conexao.query(`
                insert into tb_pomar(
                tb_tipo_id,nome,num_linhas,
                num_colunas)values(
                    ?,?,?,?
                )
            `,[tipo,
                nome,
                num_linhas,
                num_colunas])
            return exec.affectedRows;
        }catch(erro){
            return erro;
        }
}
async function buscaTodosPomar(){
    try{
        let [linha] = await conexao.query(`
            select
                u.id,
                u.nome,
                u.num_linhas,
                u.num_colunas
          from tb_pomar u;
         `)
        return linha;
    }catch(e){
        return e;
    }
}
module.exports ={
    getPomar,
    getPomarById,
    addPomar,
    buscaTodosPomar
};
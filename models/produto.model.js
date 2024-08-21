const conexao = require('../database/connection.database');
async function getProduto(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_produto
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function getProdutoById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_produto where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}

async function addProduto(
    tipo,
    descricao,
    unid_medida,
    valor){
        try{
            const [exec] = await conexao.query(`
                insert into tb_produto(
                tb_tipo_id,descricao,unid_medida,
                valor)values(
                    ?,?,?,?,
                )
            `,[tipo,
                descricao,
                unid_medida,
                valor])
            return exec.affectedRows;
        }catch(erro){
            return erro;
        }
}

async function buscaTodosProduto(){
    try{
        let [linha] = await conexao.query(`
            select
                u.id,
                u.tb_tipo_id,
                u.descricao,
                u.unid_medida,
                u.valor,
          from tb_produto u;
         `)
        return linha;
    }catch(e){
        return e;
    }
}
module.exports ={
    getProduto,
    getProdutoById,
    addProduto,
    buscaTodosProduto
};
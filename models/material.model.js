const conexao = require('../database/connection.database');
async function getMaterial(){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material
        `)
        return linhas;
    }catch(erro){
        return erro;
    }
}
async function getMaterialById(id){
    try{
        const [linhas] = await conexao.query(`
            select * from tb_material where id = ?
        `,[id])
        return linhas;
    }catch(erro){
        return erro;
    }
}

async function addMaterial(   
    nome,
    tipo,
    valor,
    fornecedor){
        try{
            const [exec] = await conexao.query(`
                insert into tb_material(
                tb_tipo_id,nome,valor,
                fornecedor)values(
                    ?,?,?,?
                )
            `,[tipo,
                nome,
                valor,
                fornecedor])
            return exec.affectedRows;
        }catch(erro){
            return erro;
        }
}

async function buscaTodosMateriais(){
    try{
        let [linha] = await conexao.query(`
            select
                u.id,
                u.nome,
                u.tb_tipo_id,
                u.valor,
                u.fornecedor
          from tb_material u;
         `)
        return linha;
    }catch(e){
        return e;
    }
}


module.exports ={
    getMaterial,
    getMaterialById,
    addMaterial,
    buscaTodosMateriais
};
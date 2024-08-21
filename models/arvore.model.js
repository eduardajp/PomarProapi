const conexao = require("../database/connection.database");
async function getArvore() {
  try {
    const [linhas] = await conexao.query(`
            select * from tb_arvore 
            `);
    return linhas;
  } catch (erro) {
    return erro;
  }
}
async function getArvoreById(id) {
  try {
    const [linhas] = await conexao.query(
      `
            select * from tb_arvore where id = ?
            `[id]
    );
    return linhas;
  } catch (erro) {
    return erro;
  }
}
async function addArvore(
  defensivo,
  fertilizante,
  ultima_verif,
  tb_tipo_id,
  tb_situacao_id
) {
  try {
    const [exec] = await conexao.query(
      `
            insert into tb_arvore (  
                defensivo,
                fertilizante,
                ultima_verif,
                tb_tipo_id,
                tb_situacao_id
            )values(
                ?,
                ?,
                ?,
                ?,
                ?
            )
            `,
      [defensivo, fertilizante, ultima_verif, tb_tipo_id, tb_situacao_id]
    );
    return exec.affectedRows;
  } catch (erro) {
    return erro;
  }
}

async function buscaTodosArvore() {
  try {
    let [linhas] = await conexao.query(`
            select 
                if(a.defensivo=1,'Sim','Não') as defensivo,
                if(a.fertilizante=1,'Sim','Não') as fertilizante,
                a.ultima_verif,
                a.tb_tipo_id as id_tipo,
                t.descricao as ds_tipo,
                a.tb_situacao_id as id_situacao,
                s.descricao as ds_situacao
            from tb_arvore a
                inner join tb_tipo t on t.id = a.tb_tipo_id
                inner join tb_situacao s on s.id = a.tb_situacao_id
            `);
    return linhas;
  } catch (e) {
    return e;
  }
}

module.exports = {
  getArvore,
  getArvoreById,
  addArvore,
  buscaTodosArvore,
};
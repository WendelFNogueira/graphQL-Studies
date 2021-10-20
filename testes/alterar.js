const db = require('../config/db');
const md5 = require('md5');


const novoUsuario = {
    nome: 'João',
    email: 'joao@empresa.com.br',
    senha: md5('pipoca453')
}

async function updateUsuario() {
    //count
    const { qtde } = await db('usuarios')
        .count('* as qtde').first();
    
    //inserir (se a tabela estiver vazia)
    if(qtde === 0) {
        await db('usuarios').insert(novoUsuario);
    }

    //consultar
    let { id } = await db('usuarios')
        .select('id').limit(1).first()
    
    //alterar
    await db('usuarios').where({ id }).update({ nome: 'João Pedro' });

    return db('usuarios').where({ id });
}

updateUsuario()
    .then( usuario => console.log( usuario ) )
    .catch( err => console.log( err.sqlMessage, err ) )
    .finally( _ => db.destroy() );


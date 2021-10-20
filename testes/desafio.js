const db = require('../config/db')
const md5 = require('md5');

const users = [
    {
        nome: 'José Bezerra',
        email: 'josebezerra@gmail.com',
        senha: md5('pipoca453')
    },
    {
        nome: 'Jão battista',
        email: 'jaobatismos@gmail.com',
        senha: md5('40028922')
    },
    {
        nome: 'Maria Dolores',
        email: 'mariadejesus@gmail.com',
        senha: md5('123456')
    },
    {
        nome: 'Lucas Pinheiro',
        email: 'lucaspinheiro@gmail.com',
        senha: md5('123456')
    },
    {
        nome: 'Carla Mafiolleti',
        email: 'carlabonequinha@gmail.com',
        senha: md5('123456')
    },
    {
        nome: 'Julia Fuoco',
        email: 'jujufogosa@gmail.com',
        senha: md5('123456')
    },
    {
        nome: 'Brenda Cavalcanti',
        email: 'brendacavalcanti@gmail.com',
        senha: md5('123456')
    }
];

async function salvarUsuario(nome, email, senha) {
    let usuario = await db('usuarios').where({ email }).first();

    if(!usuario) {
        let [ id ] = await db('usuarios').insert({ nome, email, senha });
        
        usuario = await db('usuarios').where({ id }).first();
    } else {
        await db('usuarios').where({ id: usuario.id }).update({ nome, email, senha });

        usuario = { ...usuario, nome, email, senha };
    }

    return usuario;
}

async function salvarPerfil(nome, rotulo) {
    let perfil = await db('perfis').where({ nome }).first();

    if(!perfil) {
        let [ id ] = await db('perfis').insert({ nome, rotulo });

        perfil = await db('perfis').where({ id }).first();
        
    } else {
        await db('perfis').where({ id: perfil.id }).update({ nome, rotulo });

        perfil = { ...perfil, nome, rotulo };
    }

    return perfil;
}

async function adicionarPerfis(usuario, ...perfis) {
    
    const usuario_id = usuario.id;
    
    await db('usuarios_perfis')
        .where({ usuario_id })
        .delete();
    
    for(let perfil of perfis) {
        
        const perfil_id = perfil.id;
        await db('usuarios_perfis').insert({ usuario_id, perfil_id });
    }

}

async function executar(users) {
    
    for(let user of users) {
        const usuario = await salvarUsuario(user.nome,
            user.email, user.senha)
        const perfilA = await salvarPerfil('ti', 'Tecnologia')
        const perfilB = await salvarPerfil('comum', 'Usuario')
    
        console.log(usuario)
        console.log(perfilA)
        console.log(perfilB)
    
        await adicionarPerfis(usuario, perfilA, perfilB)
    }
}

executar(users)
    .catch(err => console.log(err.sqlMessage, err))
    .finally(() => db.destroy());
const db = require('../config/db');
const md5 = require('md5');

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//     .then( res => console.log(res) )
//     .catch( err => console.log(err.sqlMessage) )
//     .finally( _ => db.destroy() );

// const perfilSU = {
//     nome: 'root' + Math.random(),
//     rotulo: 'Super Usuário'
// }

// db.insert(perfilSU).into('perfis')
//         .then( res => console.log(res) )
//         .catch( err => console.log(err.sqlMessage) )
//         .finally( _ => db.destroy() );

const novosUsuarios = [
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

async function insertUsuario() {
    await db('usuarios').insert(novosUsuarios);
    return db('usuarios');
}

insertUsuario()
    .then( usuario => console.log(usuario) )
    .catch( err => console.log(err) )
    .finally( _ => db.destroy() );



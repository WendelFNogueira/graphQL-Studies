const db = require('../config/db');

// db('perfis')
//     .then(res => res.map( perfil => perfil.nome ))
//     .then( perfis => console.log(perfis) )
//     .finally( _ => db.destroy());

// db('perfis').select('id', 'nome')
//     .then( row => console.log(row) )
//     .finally( db.destroy() );

db.select('id', 'nome').from('perfis').where( { id: 2 } )
    .then( res => res.map( rows => [ rows.id, rows.nome ] ) )
    .then( row => console.log(row) )
    .catch( err => console.log(err.sqlMessage) )
    .finally( _ => db.destroy() );
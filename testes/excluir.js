const db = require('../config/db');

//excluir por id
db('usuarios').where({ id:23 }).delete()
    .then( excluidos => console.log(excluidos) )
    .catch( err => console.log( err.sqlMessage, err ) )
    .finally( _ => db.destroy() );

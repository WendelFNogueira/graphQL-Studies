const db = require('../../config/db')

module.exports = {
    async usuarios() {
        return await db('usuarios');
    },
    async usuario(_, { filtro }) {
        if(!filtro) return null;
        const { id, email } = filtro;

        return id 
            ? await db('usuarios').where({ id }).first() 
            : email 
                ? await db('usuarios').where({ email }).first() 
                : null;
    },
}
const db = require('../../config/db')

module.exports = {
    async perfis() {
        return await db('perfis');
    },
    async perfil(_, { filtro }) {
        if(!filtro) return null;
        const { id, nome } = filtro;
        
        return id 
            ? await db('perfis').where({ id }).first() 
            : nome 
                ? await db('perfis').where({ nome }).first() 
                : null;

    }
}
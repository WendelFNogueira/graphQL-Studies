const { usuarios, nextID } = require('../../data/db01');

function indiceUsuario(filtro) {
    if(!filtro) return -1;
    const { id, email } = filtro;

    return id   ? usuarios.findIndex( user => user.id === id ) 
                : usuarios.findIndex( user => user.email === email );
}

module.exports = {
    novoUsuario(_, { dados }) {

        const emailExistente = usuarios.some( user => user.email === dados.email );

        if(emailExistente) {
            throw new Error('E-mail já cadastrado!');
        }

        const novo = {
            id: nextID(),
            ...dados,
            perfil_id: 2,
            status: 'ATIVO'
        }

        usuarios.push(novo);
        return novo;
    },

    excluirUsuario(_, { filtro }) {
        const indice = indiceUsuario(filtro);

        if(indice<0) return null;
        const excluidos = usuarios.splice(indice, 1);
        usuarios.sort();

        return excluidos ? excluidos[0] : null;

    },

    updateUsuario(_, { filtro, dados } ) {
        const indice = indiceUsuario(filtro);

        if(indice<0) return null;
        
        const usuario = {
            ...usuarios[indice],
            ...dados
        }
        usuarios.splice(indice, 1, usuario);

        return usuario;
    }

}


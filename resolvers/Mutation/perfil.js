const { perfis, nextID } = require('../../data/db01');

function indicePerfil(filtro) {
    if(!filtro) return -1;
    const { id } = filtro;

    return perfis.findIndex( perfil => perfil.id === id ); 
}

module.exports = {

    novoPerfil(_, { dados }) {
        const perfilExistente = perfis.some( perfil => perfil.nome === dados.nome );

        if(perfilExistente) {
            throw new Error('Perfil já cadastrado!');
        }

        const novo = {
            id: nextID(), 
            ...dados,
        }

        perfis.push(novo);
        return novo;
    },

    updatePerfil(_, { filtro, dados } ) {
        const indice = indicePerfil(filtro);

        if(indice<0) return null;
        
        const perfil = {
            ...perfis[indice],
            ...dados,
        }
        perfis.splice(indice, 1, perfil);

        return perfil;
    },

    excluirPerfil(_, { filtro }) {
        const indice = indicePerfil(filtro);

        if(indice<0) return null;
        const excluidos = perfis.splice(indice, 1);
        perfis.sort();

        return excluidos ? excluidos[0] : null;

    }

}


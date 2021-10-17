const { perfis } = require('../../data/db01');

module.exports = {
    perfil(_, { id }) {
        const selecionados = perfis.filter(perfil => perfil.id === id);
        return selecionados ? selecionados[0] : null;
    },

    perfis() {
        return perfis;
    },

}

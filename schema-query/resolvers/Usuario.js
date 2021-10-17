const { perfis } = require('../data/db01');

module.exports = {
    perfil(usuario) {
        const selecionados = perfis.filter(perfil => perfil.id === usuario.perfil_id);
        return selecionados ? selecionados[0] : null;
    },

    salario(usuario) {
        return usuario.salario_real;
    }
}


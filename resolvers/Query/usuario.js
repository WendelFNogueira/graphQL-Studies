const { usuarios, auth } = require('../../data/db01');

module.exports = {
    usuario(_, { id }){
        const selecionados = usuarios.filter(user => user.id === id);
        return selecionados ? selecionados[0] : null;
    },

    listarUsuarios() {
        return usuarios;
    },
    
    usuarioLogado() {
        const usuarioLogado = auth;
        return usuarioLogado;
    }
    
}

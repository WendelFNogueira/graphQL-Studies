const { usuarios, perfis, produtos, auth } = require('../data/db01');

module.exports = {
    perfil(_, { id }) {
        const selecionados = perfis.filter(perfil => perfil.id === id);
        return selecionados ? selecionados[0] : null;
    },

    perfis() {
        return perfis;
    },

    usuario(_, { id }){
        const selecionados = usuarios.filter(user => user.id === id);
        return selecionados ? selecionados[0] : null;
    },

    listarUsuarios() {
        return usuarios;
    },
    numerosMegaSena() {
        const crescente = (a,b) => a - b;
        return Array(6)
            .fill(0)
            .map( _ => parseInt( Math.random() * 60 + 1 ) )
            .sort(crescente);
    },

    produtoEmDestaque(_, { id }) {
        const selecionado = produtos.filter(produto => produto.id === id);
        return selecionado ? selecionado[0] : null;
    },

    listarProdutos() {
        return produtos;
    },
    
    ola() {
        return 'bom dia';
    },
    sysDate() {
        const dataHora = new Date();
        return dataHora;
    },
    usuarioLogado() {
        const usuarioLogado = auth;
        return usuarioLogado;
    }
}

const { produtos } = require('../../data/db01');

module.exports = {
    produtoEmDestaque(_, { id }) {
        const selecionado = produtos.filter(produto => produto.id === id);
        return selecionado ? selecionado[0] : null;
    },
    
    listarProdutos() {
        return produtos;
    },
}

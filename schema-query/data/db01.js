const auth = {
    id: 1,
    nome: 'José Bezerra',
    email: 'josebezerra@gmail.com',
    idade: 24,
    salario_real: 1234.567,
    vip: true,
    perfil_id: 1
}

const usuarios = [
    {
        id: 1,
        nome: 'José Bezerra',
        email: 'josebezerra@gmail.com',
        idade: 24,
        salario_real: 1234.567,
        vip: true,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 2,
        nome: 'Jão battista',
        email: 'jaobatismos@gmail.com',
        idade: 34,
        salario_real: 1462.52,
        vip: false,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 3,
        nome: 'Maria Dolores',
        email: 'mariadejesus@gmail.com',
        idade: 16,
        salario_real: 2641.22,
        vip: false,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: 4,
        nome: 'Lucas Pinheiro',
        email: 'lucaspinheiro@gmail.com',
        idade: 27,
        salario_real: 5200.45,
        vip: true,
        perfil_id: 2,
        status: 'BLOQUEADO'
    },
    {
        id: 5,
        nome: 'Carla Mafiolleti',
        email: 'carlabonequinha@gmail.com',
        idade: 32,
        salario_real: 7641.78,
        vip: false,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: 6,
        nome: 'Julia Fuoco',
        email: 'jujufogosa@gmail.com',
        idade: 19,
        salario_real: 9845.60,
        vip: true,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: 7,
        nome: 'Brenda Cavalcanti',
        email: 'brendacavalcanti@gmail.com',
        idade: 46,
        salario_real: 18462.63,
        vip: true,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
];

const perfis = [
    { id:1, nome: 'administrador' },
    { id:2, nome: 'usuario' }
];

const produtos = [
    {
        id: 1,
        nome: 'playstaxion',
        preco: 1427.24,
        desconto: 0.25,
        precoComDesconto: null,
        estoque: 25
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 3495.99,
        desconto: 0.5,
        precoComDesconto: null,
        estoque: 134
    },
    {
        id: 3,
        nome: 'PC Gamer',
        preco: 4674.99,
        desconto: 0.10,
        precoComDesconto: null,
        estoque: 642
    },
    {
        id: 4,
        nome: 'Headset Gamer',
        preco: 678.99,
        desconto: 0.20,
        precoComDesconto: null,
        estoque: 54
    },
    {
        id: 5,
        nome: 'Capa de Celular',
        preco: 25.49,
        desconto: null,
        precoComDesconto: null,
        estoque: 2
    },
    {
        id: 6,
        nome: 'Carregador Tipo C',
        preco: 79.99,
        desconto: null,
        precoComDesconto: null,
        estoque: 5647
    },
    {
        id: 7,
        nome: 'TV LED 49 UltraHD ',
        preco: 8647.99,
        desconto: 0.33,
        precoComDesconto: null,
        estoque: 41
    },
    {
        id: 8,
        nome: 'Monitor Gamer AOC 75MHz',
        preco: 3427.99,
        desconto: null,
        precoComDesconto: null,
        estoque: 677
    },
    {
        id: 9,
        nome: 'Mouse Gamer',
        preco: 342.88,
        desconto: null,
        precoComDesconto: null,
        estoque: 1
    },
    {
        id: 10,
        nome: 'Teclado Mecânico',
        preco: 220,
        desconto: null,
        precoComDesconto: null,
        estoque: 10
    }
];

module.exports = { usuarios, perfis, auth, produtos };

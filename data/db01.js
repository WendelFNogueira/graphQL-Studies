let id = 1;

function nextID() {
    return id++;
}


const auth = {
    id: nextID(),
    nome: 'José Bezerra',
    email: 'josebezerra@gmail.com',
    idade: 24,
    salario_real: 1234.567,
    vip: true,
    perfil_id: 1
}

const usuarios = [
    {
        id: nextID(),
        nome: 'José Bezerra',
        email: 'josebezerra@gmail.com',
        idade: 24,
        salario_real: 1234.567,
        vip: true,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: nextID(),
        nome: 'Jão battista',
        email: 'jaobatismos@gmail.com',
        idade: 34,
        salario_real: 1462.52,
        vip: false,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: nextID(),
        nome: 'Maria Dolores',
        email: 'mariadejesus@gmail.com',
        idade: 16,
        salario_real: 2641.22,
        vip: false,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: nextID(),
        nome: 'Lucas Pinheiro',
        email: 'lucaspinheiro@gmail.com',
        idade: 27,
        salario_real: 5200.45,
        vip: true,
        perfil_id: 2,
        status: 'BLOQUEADO'
    },
    {
        id: nextID(),
        nome: 'Carla Mafiolleti',
        email: 'carlabonequinha@gmail.com',
        idade: 32,
        salario_real: 7641.78,
        vip: false,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: nextID(),
        nome: 'Julia Fuoco',
        email: 'jujufogosa@gmail.com',
        idade: 19,
        salario_real: 9845.60,
        vip: true,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: nextID(),
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
        id: nextID(),
        nome: 'playstaxion',
        preco: 1427.24,
        desconto: 0.25,
        precoComDesconto: null,
        estoque: 25
    },
    {
        id: nextID(),
        nome: 'Notebook',
        preco: 3495.99,
        desconto: 0.5,
        precoComDesconto: null,
        estoque: 134
    },
    {
        id: nextID(),
        nome: 'PC Gamer',
        preco: 4674.99,
        desconto: 0.10,
        precoComDesconto: null,
        estoque: 642
    },
    {
        id: nextID(),
        nome: 'Headset Gamer',
        preco: 678.99,
        desconto: 0.20,
        precoComDesconto: null,
        estoque: 54
    },
    {
        id: nextID(),
        nome: 'Capa de Celular',
        preco: 25.49,
        desconto: null,
        precoComDesconto: null,
        estoque: 2
    },
    {
        id: nextID(),
        nome: 'Carregador Tipo C',
        preco: 79.99,
        desconto: null,
        precoComDesconto: null,
        estoque: 5647
    },
    {
        id: nextID(),
        nome: 'TV LED 49 UltraHD ',
        preco: 8647.99,
        desconto: 0.33,
        precoComDesconto: null,
        estoque: 41
    },
    {
        id: nextID(),
        nome: 'Monitor Gamer AOC 75MHz',
        preco: 3427.99,
        desconto: null,
        precoComDesconto: null,
        estoque: 677
    },
    {
        id: nextID(),
        nome: 'Mouse Gamer',
        preco: 342.88,
        desconto: null,
        precoComDesconto: null,
        estoque: 1
    },
    {
        id: nextID(),
        nome: 'Teclado Mecânico',
        preco: 220,
        desconto: null,
        precoComDesconto: null,
        estoque: 10
    }
];

module.exports = { usuarios, perfis, auth, produtos, nextID };

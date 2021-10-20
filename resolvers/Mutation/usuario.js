const db = require('../../config/db')
const { perfil : obterPerfil } = require('../Query/perfil');
const { usuario: obterUsuario } = require('../Query/usuario');
const md5 = require('md5');

module.exports = {
    async novoUsuario(_, { dados }) {
        try {
            const idsPerfis = [];
            if(dados.perfis){
                for(let perfilFiltro of dados.perfis) {
                    const perfil = await obterPerfil(_, {  filtro: perfilFiltro });
                    if(perfil) idsPerfis.push(perfil.id);
                }
            }

            const [ id ] = await db('usuarios').insert({ 
                nome: dados.nome,
                email: dados.email,
                senha: md5(dados.senha)
            });

            for(let perfil_id of idsPerfis){
                await db('usuarios_perfis').insert({ perfil_id, usuario_id: id });
            }

            return db('usuarios').where({ id }).first();

        }catch(err) {
            throw new Error(err.sqlMessage, err);
        }
    },
    async excluirUsuario(_, { filtro }) {
        try{
            const usuario = await obterUsuario(_, { filtro });
            if(usuario) {
                const { id } = usuario;
                await db('usuarios_perfis').where({ usuario_id: id }).delete();
                await db('usuarios').where({ id }).delete();
            }
            return usuario;
        }catch(err) {
            throw new Error(err.sqlMessage, err);
        }
    },
    async updateUsuario(_, { filtro, dados }) {
        try{
            const usuario = await obterUsuario(_, { filtro });
            if(usuario) {
                const { id } = usuario;
                if(dados.perfis) {
                    await db('usuarios_perfis').where({ usuario_id: id }).delete();

                    for(let filtro of dados.perfis) {
                        const perfil = await obterPerfil(_, { filtro });
                        perfil && await db('usuarios_perfis').insert({ perfil_id: perfil.id, usuario_id: id });
                    }
                }
                await db('usuarios').where({ id }).update({
                    nome: dados.nome,
                    email: dados.email,
                    senha: md5(dados.senha)
                });
            }
            return !usuario ? null : { ...usuario, ...dados };
        }catch(err) {
            throw new Error(err.sqlMessage, err);
        }
    }
}
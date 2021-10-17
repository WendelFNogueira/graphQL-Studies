const produto = require('./produto');
const usuario = require('./usuario');
const perfil = require('./perfil');

module.exports = {
    ...perfil, 
    ...produto,
    ...usuario
}

var database = require("../database/config")

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id, nome, email, fkEstilo
        FROM usuario
        WHERE email = ? AND senha = ?
    `;

    return database.executar(instrucaoSql, [email, senha]);
}

function cadastrar(nome, email, senha, fkEstilo) {
    var instrucaoSql = `
    INSERT INTO usuario (nome, email, senha, fkEstilo)
    VALUES (?, ?, ?, ?)
  `;
    console.log(nome, email, senha, fkEstilo)
    return database.executar(instrucaoSql, [
        nome,
        email,
        senha,
        fkEstilo
    ]);
}

module.exports = {
    autenticar,
    cadastrar
};
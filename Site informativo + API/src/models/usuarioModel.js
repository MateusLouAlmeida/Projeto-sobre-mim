var database = require("../database/config");

function autenticar(email, senha) {
    var sql = `SELECT id, nome, email, fkEstilo FROM usuario WHERE email = ? AND senha = ?`;
    return database.executar(sql, [email, senha]);
}

function cadastrar(nome, email, senha, fkEstilo) {
    var sql = `INSERT INTO usuario (nome, email, senha, fkEstilo) VALUES (?, ?, ?, ?)`;
    return database.executar(sql, [nome, email, senha, fkEstilo]);
}

function listar() {
    var sql = `
        SELECT id, nome, email,
            CASE fkEstilo
                WHEN 1 THEN 'Sertanejo'
                WHEN 2 THEN 'Samba'
                WHEN 3 THEN 'Rap'
                WHEN 4 THEN 'MPB'
                WHEN 5 THEN 'Pagode'
                WHEN 6 THEN 'Forró'
                WHEN 7 THEN 'Rock'
                WHEN 8 THEN 'Funk'
            END AS estilo
        FROM usuario
    `;
    return database.executar(sql, []);
}

function buscarPorId(id) {
    var sql = `SELECT id, nome, email, descricao FROM usuario WHERE id = ?`;
    return database.executar(sql, [id]);
}

function atualizar(id, nome, descricao) {
    var sql = `UPDATE usuario SET nome = ?, descricao = ? WHERE id = ?`;
    return database.executar(sql, [nome, descricao, id]);
}

module.exports = { autenticar, cadastrar, listar, buscarPorId, atualizar };
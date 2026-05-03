var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `
    SELECT u.id, u.nome, u.email, e.nome AS estilo
    FROM usuario u
    JOIN estilo e ON u.fkEstilo = e.id
    WHERE u.id = '${id}'
  `;
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `
    SELECT u.id, u.nome, u.email, e.nome AS estilo
    FROM usuario u
    JOIN estilo e ON u.fkEstilo = e.id
  `;
  return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
  var instrucaoSql = `
    SELECT * FROM usuario WHERE email = '${email}'
  `;
  return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha, fkEstilo) {
  var instrucaoSql = `
    INSERT INTO usuario (nome, email, senha, fkEstilo) 
    VALUES ('${nome}', '${email}', '${senha}', ${fkEstilo})
  `;
  return database.executar(instrucaoSql);
}

module.exports = { buscarPorId, cadastrar, listar, buscarPorEmail };
var database = require("../database/config");

function salvar(idade, genero, horas, pctBr) {
  var sql = `INSERT INTO resposta (idade, genero, horas, pct_br) VALUES (?, ?, ?, ?)`;
  return database.executar(sql, [idade, genero, horas, pctBr]);
}

function buscarAgrupado() {
  var sql = `
        SELECT genero, idade, horas, pct_br, COUNT(*) as total
        FROM resposta
        GROUP BY genero, idade, horas, pct_br
    `;
  return database.executar(sql, []);
}

function buscarEstilos() {
  var sql = `
        SELECT 
            CASE fkEstilo
                WHEN 1 THEN 'Sertanejo'
                WHEN 2 THEN 'Samba'
                WHEN 3 THEN 'Rap'
                WHEN 4 THEN 'MPB'
                WHEN 5 THEN 'Pagode'
                WHEN 6 THEN 'Forró'
                WHEN 7 THEN 'Rock'
                WHEN 8 THEN 'Funk'
            END AS estilo,
            COUNT(*) as total
        FROM usuario
        GROUP BY fkEstilo
        ORDER BY fkEstilo
    `;
  return database.executar(sql, []);
}

module.exports = { salvar, buscarAgrupado, buscarEstilos };
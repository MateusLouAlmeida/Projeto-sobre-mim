var mysql = require("mysql2");

var conexao = mysql.createConnection({
  host: "localhost",
  user: "mpb",
  password: "BenJor",
  database: "projeto_mpb"
});

function executar(instrucao, valores) {
  console.log("SQL:", instrucao);
  console.log("VALORES:", valores);

  return new Promise((resolve, reject) => {
    conexao.execute(instrucao, valores || [], (erro, resultados) => {
      if (erro) {
        console.log("ERRO SQL:", erro);
        reject(erro);
      } else {
        resolve(resultados);
      }
    });
  });
}

module.exports = {
  executar
};
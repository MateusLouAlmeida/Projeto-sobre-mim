var respostaModel = require("../models/respostaModel");

function salvar(req, res) {
  var idade = req.body.idade;
  var genero = req.body.genero;
  var horas = req.body.horas;
  var pctBr = req.body.pctBr;

  if (idade == undefined) {
    res.status(400).send("Idade está indefinida");
  } else if (genero == undefined) {
    res.status(400).send("Gênero está indefinido");
  } else if (horas == undefined) {
    res.status(400).send("Horas está indefinido");
  } else if (pctBr == undefined) {
    res.status(400).send("% Brasil está indefinido");
  } else {
    respostaModel.salvar(idade, genero, horas, pctBr)
      .then(function (resultado) {
        res.status(201).json({ mensagem: "Salvo!" });
      })
      .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarAgrupado(req, res) {
  respostaModel.buscarAgrupado()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarEstilos(req, res) {
  respostaModel.buscarEstilos()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}




module.exports = {
  salvar,
  buscarAgrupado,
  buscarEstilos
};
var express = require("express");
var router = express.Router();
var respostaController = require("../controllers/respostaController");

router.post("/", function (req, res) {
  respostaController.salvar(req, res);
});

router.get("/", function (req, res) {
  respostaController.buscarAgrupado(req, res);
});

router.get("/estilos", function (req, res) {
  respostaController.buscarEstilos(req, res);
});

module.exports = router;
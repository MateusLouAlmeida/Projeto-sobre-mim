var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/:id", function (req, res) {
    usuarioController.buscarPorId(req, res);
});

router.put("/", function (req, res) {
    usuarioController.atualizar(req, res);
});

module.exports = router;
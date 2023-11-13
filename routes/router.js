const express = require("express")
const router = express.Router()
const autorController = require("../controllers/autorController.js")
const livroController = require("../controllers/livroController.js")
const auth = require("../middlewares/auth.js")

router.post("/cadastrar/autor/", autorController.postAutor)
router.get("/visualizar/autor/:id", autorController.getAutor)
router.put("/editar/autor/:id", autorController.updateAutor)
router.delete("/excluir/autor/:id", autorController.deleteAutor)

router.post("/cadastrar/livro/:id", livroController.postLivro)
router.get("/visualizar/livro/:id", livroController.getLivro)
router.get("/visualizar/livro/autor/:id", livroController.getAutorLivro)
router.put("/editar/livro/:id", livroController.updateLivro)
router.delete("/excluir/livro/:id", livroController.deleteLivro)

module.exports = router
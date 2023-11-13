const livroModel = require("../models/livroModel.js")

const postLivro = async(req, res) => {
    
    const postedLivro = await livroModel.postLivro(req.body, req.params.id)
    res.status(200).json({message: "Livro Registrado"})
}

const getLivro = async(req, res) => {

    const gotLivro = await livroModel.getLivro(req.params.id)
    res.status(200).json(gotLivro[0])
}

const updateLivro = async(req, res) => {

    const updatedLivro = await livroModel.updateLivro(req.params.id, req.body)
    res.status(200).json({message: "Livro editado!"})
}

const deleteLivro = async(req, res) => {

    const deletedLivro = await livroModel.deleteLivro(req.params.id)
    res.status(200).json({message: "livro deletado!"})
}

const getAutorLivro = async(req, res) => {

    const gotAutorLivro = await livroModel.getAutorLivro(req.params.id)
    res.status(200).json(gotAutorLivro[0])
}
module.exports = {
    postLivro, 
    getLivro,
    updateLivro, 
    deleteLivro,
    getAutorLivro
}
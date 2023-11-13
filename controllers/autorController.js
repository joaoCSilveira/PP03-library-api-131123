const autorModel = require("../models/autorModel.js")

const postAutor = async(req, res) => {

    const postedAutor = await autorModel.postAutor(req.body)
    res.status(200).json({message: "Autor cadastrado!"})
}

const getAutor = async(req, res) => {

    const gotAutor = await autorModel.getAutor(req.params.id)
    res.status(200).json(gotAutor[0])
}

const updateAutor = async(req, res) => {

    const updatedAutor = await autorModel.updateAutor(req.params.id, req.body)
    res.status(200).json({message: "Autor editado!"})
}

const deleteAutor = async (req, res) => {

    const deletedAutor = await autorModel.deleteAutor(req.params.id)
    res.status(200).json({message: "Autor excluido!"})
}
module.exports = {
    postAutor,
    getAutor,
    updateAutor,
    deleteAutor
}
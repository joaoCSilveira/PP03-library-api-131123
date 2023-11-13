const db = require("./dbConnect.js")

const postAutor = async (body) => {

    const {id} = body
    const {nome} = body
    const {nacionalidade} = body

    const postAutor = (await db).execute("INSERT INTO autor (id, nome, nacionalidade) VALUES (?, ?, ?)", [id, nome, nacionalidade])
    return postAutor
}

const getAutor = async (id) => {

    const ID = id

    const getAutor = (await db).execute("SELECT * FROM autor WHERE id = ?", [ID])
    return getAutor
}

const updateAutor = async (id, body) => {

    const ID = id
    const {nome} = body
    const {nacionalidade} = body

    const updateAutor = (await db).execute("UPDATE autor SET nome = ?, nacionalidade = ? WHERE id = ?", [nome, nacionalidade, ID])
    return updateAutor
}

const deleteAutor = async (id) => {

    const ID = id

    const deleteAutor = (await db).execute("DELETE FROM autor WHERE id = ?", [ID])
    return deleteAutor
}
module.exports = {
    postAutor,
    getAutor,
    updateAutor,
    deleteAutor
}
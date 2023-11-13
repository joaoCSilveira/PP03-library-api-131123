const db = require("./dbConnect.js")

const postLivro = async(body, idAutor) => {

    const {id} = body
    const {nome} = body
    const {genero} = body
    const autor = idAutor

    const postLivro = (await db).execute("INSERT INTO livro (id ,nome, genero, autor) VALUES (?, ?, ?, ?)", [id ,nome, genero, autor])
    return postLivro
}

const getLivro = async(id) => {

    const ID = id

    const getLivro = (await db).execute("SELECT * FROM livro WHERE id = ?", [ID])
    return getLivro
}

const updateLivro = async(id, body) => {

    const ID = id
    const {nome} = body
    const {genero} = body

    const updateLivro = (await db).execute("UPDATE livro SET nome = ?, genero = ? WHERE id = ?", [nome, genero, ID])
    return updateLivro
}

const deleteLivro = async(id) => {

    const ID = id

    const deleteLivro = (await db).execute("DELETE FROM livro WHERE id = ?", [ID])
    return deleteLivro
}

const getAutorLivro = async(id) => {

    const ID = id

    const getAutorLivro = (await db).execute("SELECT * FROM livro WHERE autor = ?", [ID])
    return getAutorLivro
}

module.exports = {
    postLivro,
    getLivro,
    updateLivro,
    deleteLivro,
    getAutorLivro
}
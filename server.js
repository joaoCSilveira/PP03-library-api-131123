const app = require("./app.js")
require("dotenv").config({path: "./config/.env"})

port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server on ${port}`)
})
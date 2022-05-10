let express = require ('express');

let path = require('path');

let app = express ();

const port = 3000;


app.use(express.static(path.join (__dirname, './public')));

app.get("/", function (req, res){
    res.sendFile (path.resolve(__dirname, "./views/home.html"))
})

app.listen(port, () => {console.log ("Habemus Servidore")})


app.get ("/ofertas", (req, res) => {
    res.sendFile(path.resolve("./views/ofertas.html"))
})

app.get ("/tiendas_ofic", (req, res) => {
    res.sendFile (path.resolve("./views/tiendas_ofic.html"))
})

app.get ("/vender", (req, res) => {
    res.sendFile(path.resolve("./views/vender.html"))
})

app.get ("/ayuda", (req, res) => {
    res.sendFile(path.resolve("./views/ayuda.html"))
})

app.get ("/account_creation", (req, res) => {
    res.sendFile(path.resolve("./views/account_creation.html"))
})

app.get ("/log_in", (req, res) => {
    res.sendFile(path.resolve("./views/log_in.html"))
})

app.get ("/mis_compras", (req, res) => {
    res.sendFile(path.resolve("./views/mis_compras.html"))
})

const express = require ('express');
const app = express ();
const path = require ('path');
const port = 3000;

app.listen(port, () => {console.log ("Habemus Servidore")})

const publicpath = path.join(__dirname, "./public");

app.use(express.static(publicpath));

app.get("/", function (req,res){
    res.sendFile (path.resolve(__dirname, "./views/home.html"))
})
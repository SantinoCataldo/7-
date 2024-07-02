const express = require('express');
const path = require("path");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/js', express.static(path.join(__dirname, "js")));
app.use('/css', express.static(path.join(__dirname, "css")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
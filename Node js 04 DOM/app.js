const express = require('express');
const path = require("path");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/js', express.static(path.join(__dirname, "js")));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Servidor iniciado");
});
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const videos = [
    "sUm3mvZii6Y",
    "wc1k_2iLFKg",
    "4pZSqH7v0Cs",
    "xPFshRpIU90",
    "jy0sGTbP3Qs",
    "vypodN4wKjQ"
];

console.log(process.env.NODE_ENV)

app.get('/api/videos', (req, res) => {
    res.send(videos)
})

if (process.env.NODE_ENV !== 'development') { //este if torna os arquivos funcionais somente no ambiente de produção

    app.use(express.static(path.join(__dirname, 'front-app/build'))) //servindo os arquivos dentro da build

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front-app/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error)
            }
        }))
    })
}

app.listen(3000, () => {
    console.log("Running")
})

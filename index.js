const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

//get http://localhost:3000/filmes
app.get("/oi", (req, res) => {
    res.send("oi")
})

let filmes = [
    {
        titulo: "A Volta dos Que Não Foram",
        sinopse: "É um filme que trata sobre escolhas, na qual toda escolha haverá uma consequencia onde vc pode ir mesmo qeu não tenha escolhido ou não volta mais no tempo"
    },
    {
        titulo: "Star Wars: Episódio III – A Vingança dos Sith",
        sinopse: "As Guerras Clônicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de Darth Sidious até se tornar o temível Darth Vader. Juntos eles tramam um plano para aniquilar de uma vez por todas com os cavaleiros jedi."
    }
]

app.get('/filmes', (req,res) => {
    res.json(filmes)
})

app.post('/filmes', (req, res) => {
    //capturar as infos enviadas
    const titulo =  req.body.titulo
    const sinopse = req.body.sinopse

    //montar um objeto filme com as infos capturadas
    const novo_filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(novo_filme)
    res.json(filmes)
})

app.listen (3000, () => console.log("server up & running"))
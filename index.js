const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(cors())

const Filme = mongoose.model ("Filme", mongoose.Schema({
    titulo: {type: String},
    sinopse: {type: String}
}))

async function conectarAoMongoDB() {
    await mongoose.connect(`mongodb+srv://BancoBanco:1234@cluster0.ho9y3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

// let filmes = [
//     {
//         titulo: "A Volta dos Que Não Foram",
//         sinopse: "É um filme que trata sobre escolhas, na qual toda escolha haverá uma consequencia onde vc pode ir mesmo qeu não tenha escolhido ou não volta mais no tempo"
//     },
//     {
//         titulo: "Star Wars: Episódio III – A Vingança dos Sith",
//         sinopse: "As Guerras Clônicas estão em pleno andamento e Anakin Skywalker mantém um elo de lealdade com Palpatine, ao mesmo tempo em que luta para que seu casamento com Padmé Amidala não seja afetado por esta situação. Seduzido por promessas de poder, Anakin se aproxima cada vez mais de Darth Sidious até se tornar o temível Darth Vader. Juntos eles tramam um plano para aniquilar de uma vez por todas com os cavaleiros jedi."
//     }
// ]

app.get('/filmes', async (req,res) => {
    const filmes = await Filme.find()

    res.json(filmes)
})

app.post('/filmes', async (req, res) => {
    //capturar as infos enviadas
    const titulo =  req.body.titulo
    const sinopse = req.body.sinopse

    const filme = new Filme({titulo: titulo, sinopse: sinopse})
    await filme.save()

    const filmes = await Filme.find()
    res.json(filmes)
})

app.listen (3000, () => {
    try{
        conectarAoMongoDB()
        console.log("server up and running")
    }
    catch (e){
        console.log("erro de conexão", e)
    }
})

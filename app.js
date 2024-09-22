const express = require('express')
const app = express()

const db = require('./db')

const cliente = require('./routes/clientes')

app.set('view engine', 'ejs')

app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/', cliente);

app.listen(5000, () => {
    console.log('!Server UP! en http://localhost:5000')
})
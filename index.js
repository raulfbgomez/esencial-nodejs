const express = require('express')
const logger = require('morgan') // Muestra informacion adicional de los request en la consola
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes/views')(app)
require('./routes/special')(app)

console.log('Iniciando express.js')
app.listen(3000, () => {
  console.log('express ha iniciado correctamente')
})

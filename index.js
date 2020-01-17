const express = require('express')
const app = express()

require('./routes/views')(app)
require('./routes/special')(app)

console.log('Iniciando express.js')
app.listen(3000, () => {
  console.log('express ha iniciado correctamente')
})

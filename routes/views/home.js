module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('hola, estoy en la ruta')
  })
}
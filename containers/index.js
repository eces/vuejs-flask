const app = require('./app')
const http = require('http')

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', console.error)
server.on('listening', e => {
  console.log('Listening on', port)
})
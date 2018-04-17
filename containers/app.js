const express = require('express')
const serveStatic = require('serve-static')

const app = express()

app.use('/static', serveStatic('./fe/builds'))

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'It works!',
  })
})

app.get('/_assets', (req, res) => {
  const fs = require('fs')

  res.status(200).json(fs.readdirSync('./fe/builds'))
})

module.exports = app
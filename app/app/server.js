const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!, my name is #{appName}')
})

app.listen(#{port}, function () {
  console.log('Example app listening on port #{port}!')
})
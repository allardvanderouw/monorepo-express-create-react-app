require('newrelic')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('./client/build'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
//const loginRouter = require('./auth/router')
// const eventRouter = require('./events/router')
// const ticketRouter = require('./tickets/router')
const crawlRouter = require('./crawls/router')
// const commentRouter = require('./comments/router')

app.use(
  corsMiddleware, parserMiddleware, crawlRouter, 
  // loginRouter, eventRouter, ticketRouter, commentRouter
)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
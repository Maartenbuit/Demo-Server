const { Router } = require('express')
const router = new Router()
const Crawls = require('./model')

router.get('/crawls', (req, res, next) => {
  Crawls
    .findAll()
    .then(crawl => { res.send(crawl) })
    .catch(err => next(err))
})


module.exports = router
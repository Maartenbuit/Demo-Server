const Sequelize = require('sequelize')
const db = require('../db')

const Crawls = db.define('crawls', {
  crawlUrl: {
    type: Sequelize.STRING
  },
  picUrl: {
    type: Sequelize.STRING,
  },
   name: {
    type: Sequelize.STRING,
  },
 }, {
    timestamps: false,
    tableName: 'crawls'
  })


module.exports = Crawls
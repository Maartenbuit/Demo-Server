const Sequelize = require('sequelize')
const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/postgres'
const db = new Sequelize(databaseURL)

db
  .sync({force: false})
  .then(() => console.log(`Database is good to go...!`))
  .catch(console.error())

module.exports = db

const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = faker.name.findName()

  connection.query(`INSERT INTO alunos (nome) VALUES ('${name}')`)

  connection.query(`SELECT nome FROM alunos`, (error, results, fields) => {
    console.log(results);
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, () => {
  console.log('Up on Port:', port);
})
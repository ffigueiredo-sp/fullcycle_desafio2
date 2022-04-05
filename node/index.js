const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {

    insertData(config)
      
    connection.query(`SELECT * FROM people`, (error, results, fields) => {
        if(error) {
            console.log(error);
            return;
        }
        var rows = JSON.parse(JSON.stringify(results));
        console.log(rows);

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <ol>
            ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
            </ol>
        `)
    })
  })

app.listen(port, ()=> {
    console.log('Rodando na porta' + port)
})

function insertData(config){

    const connection = mysql.createConnection(config)

    var name = `acesso:${Date.now()}`
    var query = `INSERT INTO people(name) values ('${name}')`    
    console.log('Query:' + query)
    connection.query(query)
    
    connection.end()

}




const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection(config);

// const sql = `INSERT INTO people(name) values('Geralt')`
// connection.query(sql);
// connection.end();

app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('<h1>This app is running without node on my machine. Docker is awesome!</h1>');
})

app.post('/people', (req, res) => {
    connection.query(`INSERT INTO people(name) values('Yennefer')`);
    res.send('The wind is howling.');
})

app.listen(port, () => console.log(`App running on port ${port}`));
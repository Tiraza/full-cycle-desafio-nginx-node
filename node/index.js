const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const conn = mysql.createConnection(config);

app.get('/', (req, res) => {
    var select = 'SELECT * FROM people';
    conn.query(select, function (err, data, fields) {
        if (err) {
            console.log(err);
            res.render('index', {data: ''});
        } else {
            res.render('index', {data: data});
        }
    });
});

app.post('/', (req, res) => {
    var insert = `INSERT INTO people (name) VALUES ('${req.body.name}')`;
    conn.query(insert);
    
    var select = 'SELECT * FROM people';
    conn.query(select, function (err, data, fields) {
        if (err) {
            console.log(err);
            res.render('index', {data: ''});
        } else {
            res.render('index', {data: data});
        }
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});
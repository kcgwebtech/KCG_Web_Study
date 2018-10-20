const express = require('express');
const app = express();
const port = 8888;

app.get('/hi', (req, res) =>{
    res.send('he is motherfucker');
})

app.listen(port);
console.log('start server with 8888!');
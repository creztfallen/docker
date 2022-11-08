const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>This app is running without node on my machine. Docker is awesome!</h1>')
})

app.listen(port, () => console.log(`App running on port ${port}`))
const express = require('express');
const app = express();
const colors = require('colors')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1> Please, note that this simple app was completely develped on a container and is using the node engine inside of the container to run this.</h1>'));

app.listen(port, () => colors.green(console.log(`Server running on port ${port}! Please, note that this simple app was completely develped on a container and is using the node engine inside of the container to run this.`)));
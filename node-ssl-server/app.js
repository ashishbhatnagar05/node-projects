const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')

const app = express()

app.use('/', (req, res, next) => {
    res.send('Hello From SSL server')
})

const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

sslServer.listen(3443, () => {
    console.log('Secure Server is running........');
})
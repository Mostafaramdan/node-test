const express = require('express')
const app = express()
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
require('dotenv').config()
require('../app/db/connection')

app.use(require('../routes/users.routes'))
app.use('/posts',require('../routes/posts.routes'))

module.exports= app;
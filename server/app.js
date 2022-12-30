const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middleware = (req, res, next) => {
    console.log("middleware hit");
    next();
}
const authRouter = require('./router/authRouter')


dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
// app.use(require('./router/auth'))
// app.use(require('./router/createRoom'))
// app.use(require('./router/adminLogin'))
app.use('/auth', authRouter);

app.get('/auth', (req, res) =>{
    res.send("/auth hit")
})

app.get('/admin',middleware, (req, res) => {
    res.send('admin')
})

app.listen(3000, () => {
    console.log("server started on localhost 3000")
})
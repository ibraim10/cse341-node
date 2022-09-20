const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');

connectDB();
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


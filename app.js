// const express = require('express');
// const app = express();
// const port = 3000;


// app.use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});











// //other
// const express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000,
//   mongoose = require('mongoose'),
//   contacts = require('./api/models/contactsModel'), //created model loading here
//   bodyParser = require('body-parser');
  
// // mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://ibraim10:Mibradb@cluster0.zr0mr0i.mongodb.net/test'); 


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// const routes = require('./api/routes/contactsRoutes'); //importing route
// routes(app); //register the route


// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);


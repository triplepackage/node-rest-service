const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');
const rentals = require('./api/rentals');
const users = require('./api/users')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use("/rentals",rentals);
app.use("/users",users);

//if we are here then the specified request is not found
app.use((req,res,next)=> {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//all other requests are not implemented.
app.use((err,req, res, next) => {
   res.status(err.status || 501);
   res.json({
       error: {
           code: err.status || 501,
           message: err.message
       }
   });
});

//Use system configuration for port or use 6001 by default.
const port = process.env.PORT || 8181;

//Create server with exported express app
const server = http.createServer(app);
server.listen(port);

const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const http = require('http');
const database = require('./database');

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

const router = express.Router();

app.use('/', router);

//handles url http://localhost:6001/rentals
router.get("/rentals", (req, res, next) => {

    database.query('SELECT * from rental', (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Rentals listed.",
                productId:data
            });
        }
    });
});

//handles url http://localhost:6001/rentals/43
router.get("/rentals/:productId", (req, res, next) => {
    let rentalId = req.params.productId;

    database.query(`SELECT * from rental WHERE _id= ${rentalId}`, (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"Rental found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message:"Rental Not found."
                });
            }
        }
    });
});

router.get("/rentals/city/:cityName", (req, res, next) => {
    let cityName = req.params.cityName;

    database.query(`SELECT * from rental WHERE city= '${cityName}'`, (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"Rental found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message:"Rental Not found."
                });
            }
        }
    });
});

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
const port = process.env.port || 6001;

//Create server with exported express app
const server = http.createServer(app);
server.listen(port);

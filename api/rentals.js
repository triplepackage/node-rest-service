const express = require('express');
const database = require('../database');

const router = express.Router();

//handles url http://localhost:6001/rentals
router.get("/", (req, res, next) => {

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
router.get("/:rentalId", (req, res, next) => {
    let rentalId = req.params.rentalId;

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

router.get("/city/:cityName", (req, res, next) => {
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

module.exports = router;

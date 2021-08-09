const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
require('dotenv').config();
// takes custom address input from farmers and turns it into coordinates to place a marker on the map for users to see
router.post('/updatelocation', (req, res) => {
    console.log('what is this',req.body);
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const description = req.body.description;

    axios.get(`${process.env.census_search_api}&street=${address}&city=${city}&state=${state}&zipCode=${zip}`)
    .then((response) => {
        console.log('Exact coordinates',response.data.result.addressMatches[0].coordinates);
        const lat = response.data.result.addressMatches[0].coordinates.y;
        const lng = response.data.result.addressMatches[0].coordinates.x;
        const qText = `
        UPDATE  "mountains" 
        SET "location" = '{"lat":${lat},  "lng": ${lng} }', "description" = $1
        WHERE "user_id" = $2;`;
        pool.query(qText,[description, req.user.id])
        .then (result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('coordinates not working',error);
            res.sendStatus(501)
          })
    })
    .catch((err) => {
        console.log('does not work',err);
        res.sendStatus(500)
    })
});
// gets all locations on Map with markers
router.get('/locations', (req, res) => {

    pool.query('SELECT * FROM "mountains";')
    .then((results) => {
        res.send(results.rows);
    })
    .catch((err) => {
        console.log('Error receiving coordinates', err);
        res.sendStatus(500)
    })
});

module.exports = router;
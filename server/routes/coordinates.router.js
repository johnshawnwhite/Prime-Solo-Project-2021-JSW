// const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const createFeatures = require('../modules/createFeature');
require('dotenv').config();
// takes custom address input and turns it into coordinates to place a marker on the map for users to see
// router.post('/points-features', (req, res) => {
//     console.log('what is this',req.body);
//     const latitude = req.body.latitude;
//     const longitude = req.body.longitude;
//     const description = req.body.description;

//     axios.post(req.body)
//     .then((response) => {
//         console.log('Exact coordinates',response.data.result.coordinates);
//         const lat = response.data.result.addressMatches[0].coordinates.y;
//         const long = response.data.result.addressMatches[0].coordinates.x;
//         const qText = `
//         UPDATE "user-locations" 
//         SET "latitude" = {"lat":${lat} }
//         SET "longitude" = {lng":${long} }
//         WHERE "user_id" = $1;`;
//         pool.query(qText,[req.user.id, description, description ])
//         .then (result => {
//             res.sendStatus(201);
//         })
//         .catch(error => {
//             console.log('coordinates not working',error);
//             res.sendStatus(501)
//           })
//     })
//     .catch((err) => {
//         console.log('does not work',err);
//         res.sendStatus(500)
//     })
// });

router.post('/pointsfeatures', (req, res) => {
    console.log('what is this',req.body);
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const description = req.body.description;
    const qText = `        
INSERT INTO "user-locations" ( "user-id", "longitude", "latitude", "description")
VALUES ($1, $2, $3, $4);`;
        pool.query(qText,[req.user.id, longitude, latitude, description ])
        .then (result => {
            res.sendStatus(201);
        })
    .catch((err) => {
        console.log('does not work',err);
        res.sendStatus(500)
    })
});


//gets all locations on Map with markers
router.get('/points-features', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM user_locations;');
        //Create feature collection of points from data.rows.
        // Identify the columns from data.rows that contain longitude and latitude.
        const points = createFeatures(data.rows, 'longitude', 'latitude');
        // returns FeatureCollection<points>
        res.send(points);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }   
});

module.exports = router;
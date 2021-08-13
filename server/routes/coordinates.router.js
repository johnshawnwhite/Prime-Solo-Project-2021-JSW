// const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
// const createFeatures = require('../modules/createFeature');
require('dotenv').config();

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
router.get('/pointsfeatures', (req, res) => {
    console.log('pulling')
    pool.query('SELECT * FROM "user-locations";')
    .then((result) => {
        res.send(result.rows);
    }).catch (error => {
        console.log('getting points', error);
        res.sendStatus(500);
    })  
});

router.delete('/pointsfeatures/:id', (req, res) => {
    pool.query('DELETE FROM "user-locations" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/overlay', error);
        res.sendStatus(500);
    })
  });
module.exports = router;


// const { default: axios } = require('axios');
const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
// const createFeatures = require('../modules/createFeature');
require("dotenv").config();

router.post("/pointsfeatures", rejectUnauthenticated, (req, res) => {
  console.log("what is this", req.body);
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const description = req.body.description;
  const qText = `        
INSERT INTO "user-locations" ( "user-id", "longitude", "latitude", "description")
VALUES ($1, $2, $3, $4);`;
  pool
    .query(qText, [req.user.id, longitude, latitude, description])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("does not work", err);
      res.sendStatus(500);
    });
});

//gets all locations on Map with markers
router.get("/pointsfeatures", rejectUnauthenticated, (req, res) => {
  console.log("pulling");
  pool
    .query('SELECT * FROM "user-locations" ORDER BY "id" ASC;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("getting points", error);
      res.sendStatus(500);
    });
});

router.delete("/pointsfeatures/:id", rejectUnauthenticated, (req, res) => {
  pool
    .query('DELETE FROM "user-locations" WHERE id=$1', [req.params.id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error DELETE /api/overlay", error);
      res.sendStatus(500);
    });
});

router.put("/pointsfeatures/:id", rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const marker = req.body;
  // "id" will give us back the id of the description to change
console.log(marker, id)
  const insertspotQuery = `
    
UPDATE "user-locations" 
SET "latitude" = $1, "longitude" = $2, "description" = $3
WHERE "id" = $4;`;

  // FIRST QUERY MAKES CAR
  pool
    .query(insertspotQuery, [marker.latitude, marker.longitude, marker.description, id])
    .then((result) => {
      res.sendStatus(202);
      // Catch for first query
    })
    .catch((err) => {
      console.log("Error adding description:", err);
      res.sendStatus(500);
    });
});

module.exports = router;

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET all overlays that have been placed, populate with data from the mountains collection
router.get('/', (req, res) => {
  // Find all orders and return them
  pool.query('SELECT * FROM "overlays";').then((result) => {
      res.send(result.rows);
  }).catch((error) => {
      console.log('Error GET /api/overlay', error);
      res.sendStatus(500);  
  });
});

// POST a new overlay
router.post('/', async (req, res) => {
  const client = await pool.connect();
  try {
      const {
          ID,
          user_id,
          lat,
          long,
          notes,
          mountain_id,
          overlays
      } = req.body;
      await client.query('BEGIN')
      const orderInsertResults = await client.query(`INSERT INTO "overlays" ("ID", "user_id", "lat", "long", "notes", "mountain_id")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id;`, [ID, user_id, lat, long, notes, mountain_id]);
      const overlayId = overlayInsertResults.rows[0].id;

      await Promise.all(overlays.map(overlay => {
          const insertLineItemText = `INSERT INTO "overlays" ("ID", "user_id", "lat", "long", "notes", "mountain_id") VALUES ($1, $2, $3, $4, $5, $6)`;
          const insertLineItemValues = [overlayID, overlay.id, overlay.quantity, overlay.lat, overlay.long, overlay.notes, overlay.mountain.id];
          return client.query(insertLineItemText, insertLineItemValues);
      }));

      await client.query('COMMIT')
      res.sendStatus(201);
  } catch (error) {
      await client.query('ROLLBACK')
      console.log('Error POST /api/overlay', error);
      res.sendStatus(500);
  } finally {
      client.release()
  }
});

// DELETE an overlay
router.delete('/:id', (req, res) => {
  pool.query('DELETE FROM "overlay" WHERE id=$1', [req.params.id]).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /api/overlay', error);
      res.sendStatus(500);
  })
});

module.exports = router;
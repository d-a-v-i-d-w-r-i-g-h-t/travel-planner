const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationsData = await Location.findAll({
      include: [{ model: Location }],
    });
    res.status(200).json(locationsData);
  } catch (err) {
    res.status(500).json(err);
  }
});


const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models');

// GET all travelers
router.get('/', async (req, res) => {
  try {
    const travelersData = await Traveler.findAll({
      include: [{ model: Traveler }],
    });
    res.status(200).json(travelersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveler
router.get('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      include: [
        { model: Trips, attributes: { exclude: ['id', 'traveler_id', 'location_id'] } }, 
        { model: Location, attributes: { exclude: ['id'] } }
      ],
      attributes: { exclude: ['id'] }
    });

    if (!travelerData) {
      res.status(404).json({ message: 'No traveler found with that id!' });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a traveler
router.post('/', async (req, res) => {
  try {
    const travelerData = await Traveler.create(req.body);
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a traveler
router.delete()
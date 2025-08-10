const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

    if(!q)
    {
        return res
            .status(404)
            .json(err);
    } else {
        return res 
            .status(200)
            .json(q);
    }
};


const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})
        .exec();

    if(!q)
    {
        return res
            .status(404)
            .json(err);
    } else {
        return res 
            .status(200)
            .json(q);
    }
};

const tripsAddTrip = async(req, res) => {
  try {
    const newTrip = new Trip({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description,
    });

    const savedTrip = await newTrip.save();
    return res.status(201).json(savedTrip);

  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// PUT: /trips/:tripCode - Updates an existing Trip
// Regardless of outcome, response must include HTTP status
// code and JSON message to the requesting client

const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  // console.log(req.params);
  // console.log(req.body);

  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true } // Return the updated document
    ).exec();

    if (!q) {
      // Database returned no data
      return res.status(400).json({ error: 'Trip not found or could not be updated' });
    } else {
      // Return the updated trip
      return res.status(200).json(q);
    }
  } catch (err) {
    // Handle any errors during the update
    return res.status(500).json({ error: err.message });
  }

  // Uncomment to log result
  // console.log(q);
};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
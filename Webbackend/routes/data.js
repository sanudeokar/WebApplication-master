// const router = require('express').Router();
// let Data = require('../models/data.model');

// router.route('/').get((req, res) => {
//   Data.find()
//     .then(data => res.json(data))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/add').post((req, res) => {
//   const name = req.body.name;
//   const value = Number(req.body.value);

//   const newData = new Data({
//     name,
//     value,
//   });

//   newData.save()
//     .then(() => res.json('Data added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// module.exports = router;

const router = require('express').Router();
let Data = require('../models/data.model');

router.route('/').get(async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(400).json({ error: err.message });
  }
});

router.route('/add').post(async (req, res) => {
  try {
    const { name, value } = req.body;
    
    if (!name || value === undefined) {
      return res.status(400).json({ error: 'Name and value are required' });
    }

    const newData = new Data({
      name,
      value: Number(value),
    });

    await newData.save();
    res.status(201).json({ message: 'Data added successfully', data: newData });
  } catch (err) {
    console.error('Error adding data:', err);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
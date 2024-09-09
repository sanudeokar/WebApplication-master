const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');
   require('dotenv').config();

   const app = express();
   const port = process.env.PORT || 5000;

   app.use(cors());
   app.use(express.json());

   mongoose.connect(process.env.ATLAS_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   }).then(() => console.log("MongoDB connected successfully"))
     .catch(err => console.log("MongoDB connection error: ", err));

   // Define a simple schema
   const DataSchema = new mongoose.Schema({
     name: String,
     value: Number
   });

   const Data = mongoose.model('Data', DataSchema);

   app.get('/api/data', async (req, res) => {
     try {
       const allData = await Data.find();
       res.json(allData);
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
   });

   app.post('/api/data/add', async (req, res) => {
     const newData = new Data(req.body);
     try {
       const savedData = await newData.save();
       res.status(201).json(savedData);
     } catch (error) {
       res.status(400).json({ message: error.message });
     }
   });

   app.listen(port, () => {
     console.log(`Server is running on port: ${port}`);
   });
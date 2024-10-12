const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://angelahao299:Mongoclouds6%40@nutrition-cluster.smq9k.mongodb.net/?retryWrites=true&w=majority&appName=nutrition-cluster';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nutrition Tracker Backend');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

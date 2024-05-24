require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGODB_DBNAME
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Drawing App Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
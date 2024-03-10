import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Tag } from './models/Models.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Hello World!');
});

app.post('/tag', async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newTag = {
      title: req.body.title,
      description: req.body.description
    };

    const tag = await Tag.create(newTag);
    return res.status(201).send(tag);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('The application is connected to the database.');
    app.listen(PORT, () => {
      console.log(`The application is listening to PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
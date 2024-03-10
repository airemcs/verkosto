import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Tag, Organization, Position } from './models/Models.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Hello World!');
});

app.post('/topics', async (req, res) => {
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

app.get('/topics', async (req, res) => {
  try {
    const tags = await Tag.find({});
    return res.status(200).json({
      count: tags.length,
      data: tags
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/topics/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findById(id);
    return res.status(200).json(tag);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/topics/:id', async (req, res) => {
  try {

    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const { id } = req.params;
    const result = await Tag.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// TODO: Kindly test this.
app.delete('/topics/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Tag.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.post('/communities', async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newOrganization = {
      title: req.body.title,
      description: req.body.description
    };

    const organization = await Organization.create(newOrganization);
    return res.status(201).send(organization);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/communities', async (req, res) => {
  try {
    const organization = await Organization.find({});
    return res.status(200).json({
      count: organization.length,
      data: organization
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/communities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const organization = await Organization.findById(id);
    return res.status(200).json(organization);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/communities/:id', async (req, res) => {
  try {

    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const { id } = req.params;
    const result = await Organization.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.delete('/communities/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Organization.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Use this for data population.
app.post('/positions', async (req, res) => {
  try {
    
    if (!req.body.title || !req.body.description) {
      return res.status(400).send({
        message: 'Please send all the required fields: title, description.'
      });
    }

    const newPosition = {
      title: req.body.title,
      description: req.body.description
    };

    const position = await Position.create(newPosition);
    return res.status(201).send(position);

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
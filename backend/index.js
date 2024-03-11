import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Tag, Organization, Position, User, Post } from './models/Models.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Hello World!');
});

// CRUD: Topics
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

// CRUD: Communities
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

// CRUD: Population - Use this for data population.
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

app.get('/positions', async (req, res) => {
  try {
    const positions = await Position.find({});
    return res.status(200).json({
      count: positions.length,
      data: positions
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/positions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const position = await Position.findById(id);
    return res.status(200).json(position);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// CRUD: Users
app.post('/users', async (req, res) => {
  try {

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      country: req.body.country,
      city: req.body.city,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin
    };

    const user = await User.create(newUser);
    return res.status(201).send(user);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await User.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// CRUD: Post
app.post('/posts', async (req, res) => {
  try {

    const newPost = {
      userID: req.body.userID,
      title: req.body.title,
      datePosted: req.body.datePosted,
      content: req.body.content,
      upvotes: req.body.upvotes,
      downvotes: req.body.downvotes,
      tags: req.body.tags
    };

    const post = await Post.create(newPost);
    return res.status(201).send(post);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({
      count: posts.length,
      data: posts
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.status(200).json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/posts/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

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
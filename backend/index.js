import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Tag, Organization, Position, User, Post, Comment, Credential } from './models/Models.js';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// CRUD Operations: User
app.post('/users', async (req, res) => {
  try {

    if (!req.body.firstName || !req.body.lastName) {
      return res.status(400).send({ message: "There are missing required fields: firstName, lastName." });
    }

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      country: req.body.country,
      city: req.body.city,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin,
      postIDs: req.body.postIDs || [],
      commentIDs: req.body.commentIDs || [],
      organizationIDs: req.body.organizationIDs || null,
      positionID: req.body.positionID || null,
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

    const requiredFields = ['firstName', 'lastName'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).send({ message: `${field} is required` });
      }
    }

    const result = await User.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The user is not found.' });
    }

    return res.status(200).send({ message: 'The user has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// CRUD Operations: Post
app.post('/posts', async (req, res) => {
  try {

    if (!req.body.userID || !req.body.title || !req.body.content) {
      return res.status(400).send({ message: "There are missing required fields: userID, title, content." });
    }

    const user = await User.findById(req.body.userID);
    if (!user) {
      return res.status(404).send({ message: "The user not found." });
    }

    const newPost = {
      userID: req.body.userID,
      title: req.body.title,
      datePosted: req.body.datePosted || new Date(),
      content: req.body.content,
      upvotes: req.body.upvotes || 0,
      downvotes: req.body.downvotes || 0,
      tags: req.body.tags
    };

    const post = await Post.create(newPost);
    await User.findByIdAndUpdate(req.body.userID, { $push: { postIDs: post._id } });

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

app.delete('/users/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).json({ message: 'The delete was successful.' });
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// CRUD Operations: Comment
app.post('/comments', async (req, res) => {
  try {

    if (!req.body.content || !req.body.userID || !req.body.postID) {
      return res.status(400).send({ message: "Missing required fields: content, userID, postID" });
    }

    const newComment = {
      repliedCommentID: req.body.repliedCommentID,
      dateCommented: req.body.dateCommented || new Date(),
      content: req.body.content,
      userID: req.body.userID,
      postID: req.body.postID
    };

    const comment = await Comment.create(newComment);
    await Post.findByIdAndUpdate(req.body.postID, { $push: { commentIDs: comment._id } });
    await User.findByIdAndUpdate(req.body.userID, { $push: { commentIDs: comment._id } });

    return res.status(201).send(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find({});
    return res.status(200).json({
      count: comments.length,
      data: comments
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/comments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.put('/comments/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const result = await Comment.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: 'The tag is not found.' });
    }

    return res.status(200).send({ message: 'The tag has been updated.' });

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// CRUD Operations: Topics
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

// CRUD Operations: Communities
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

// CRUD Operations: Population
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

// CRUD Operations: Credential
app.post('/credentials', async (req, res) => {
  try {

    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.userID) {
      return res.status(400).send({ message: "There are missing required fields." });
    }

    const newCredential = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      userID: req.body.userID
    };

    const credential = await Credential.create(newCredential);
    return res.status(201).send(credential);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/credentials', async (req, res) => {
  try {
    const credentials = await Credential.find({});
    return res.status(200).json({
      count: credentials.length,
      data: credentials
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

app.get('/credentials/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const credential = await Credential.findOne({ email: email });
    if (!credential) {
      return res.status(404).json({ message: 'Credential not found' });
    }
    return res.status(200).json(credential);
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
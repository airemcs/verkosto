const express = require('express')
const mongoose = require('mongoose')
const { PORT, mongoDBURL } = require('./config.js');
const commentRoutes = require('./routes/comment');
const communityRoutes = require('./routes/community');
const positionRoutes = require('./routes/position');
const postRoutes = require('./routes/post');
const tagRoutes = require('./routes/tag');
const userRoutes = require('./routes/user');

const cors = require("cors");

const app = express();
app.use(express.json({limit: 52428800}));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/topics', tagRoutes);
app.use('/communities', communityRoutes);
app.use('/positions', positionRoutes);

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
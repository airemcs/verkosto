const express = require('express')
const mongoose = require('mongoose')
const { PORT, mongoDBURL } = require('./config.js');
const commentRoutes = require('./routes/comment');
const communityRoutes = require('./routes/community');
const credentialRoutes = require('./routes/credential');
const positionRoutes = require('./routes/position');
const postRoutes = require('./routes/post');
const tagRoutes = require('./routes/tag');
const userRoutes = require('./routes/user');

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/topics', tagRoutes);
app.use('/communities', communityRoutes);
app.use('/positions', positionRoutes);
app.use('/credentials', credentialRoutes);

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
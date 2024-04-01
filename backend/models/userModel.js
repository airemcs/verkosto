const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

// TO BE MERGED 

const userSchema = mongoose.Schema({
  // userID: Number,
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  bio: {
    type: String,
    default: null
  },
  country: {
    type: String,
    default: null
  },
  city: {
    type: String,
    default: null
  },
  facebook: {
    type: String,
    default: null
  },
  linkedin: {
    type: String,
    default: null
  },
  postIDs: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  commentIDs: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  organizationIDs: { type: Schema.Types.ObjectId, ref: 'Organization' },
  positionID: { type: Schema.Types.ObjectId, ref: 'Position' },
});

userSchema.statics.signup = async function(email, password, firstName, lastName) {

  if (!email || !password || !firstName || !lastName) {
    throw Error('All fields must be filled');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Use a different email');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt)

  console.log(email, password, firstName, lastName);
  console.log("successful SIGNUP")

  const user = await this.create({ email, password: hash, firstName, lastName})

  return user
}

userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

userSchema.statics.edit = async function(email, firstName, lastName, bio, country, city, facebook, linkedin, password) {

  const user = await this.findOne({ email });

  if (user) {
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.bio = bio || user.bio;
    user.country = country || user.country;
    user.city = city || user.city;
    user.facebook = facebook || user.facebook;
    user.linkedin = linkedin || user.linkedin;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    user.password = hash || user.password;
  }


  const updatedUser = await user.save();

  return updatedUser;
}
module.exports = mongoose.model('User', userSchema);


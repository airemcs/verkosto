const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dta5vtjmx', 
  api_key: '139525979457845', 
  api_secret: 'D5M0Q2mdO1lvAh9cxmYkV8xe7lM' 
});

module.exports = cloudinary;
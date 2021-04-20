const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let AdminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    sessionToken: [{
      token: String
    }]
  })
  
  AdminSchema.pre('save', function(next) {
    let admin = this;
    if (admin.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(admin.password, salt, (err, hash) => {
            admin.password = hash
          next()
        })
      })
    } else {
      next()
    }
  })
  
  
  
  let Admin = mongoose.model('Admin', AdminSchema)
  
  module.exports = Admin
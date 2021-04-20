const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin = require('./AdminModel')

signUp = async (req, res) => {
  let admin = new Admin({username: 'testas', password: 'testas'})
  console.log(admin)
  try {
    let createdAdmin = await admin.save()
    res.json(createdAdmin)
  } catch (e) {
    res.status(400).json(e)
  }
}

login = async (req, res) => {
  console.log(await Admin.findOne({
    username: req.body.username
  }))
  try {
    let admin = await Admin.findOne({
      username: req.body.username
    })
    if(admin){
      let response = await bcrypt.compare(req.body.password, admin.password)
      if (!response) throw 'Incorrect password'
    }else {
      throw "User doesn't exist"
    }
    
    let token = await jwt.sign({
      _id: admin._id.toHexString()
    }, 'dntpwnme8').toString()
    admin.sessionToken.push({
      token
    })
    await admin.save()
    res.header('admin-id', token).json(admin)
  } catch (e) {
    res.status(400).json(e)
  }
}

logout = async (req, res) => {
  let token = req.token;
  let admin = req.admin
  try {
    await admin.update({
      $pull: {
        sessionToken: {
          token
        }
      }
    })
    res.json('successfull logout')
  } catch (e) {
    res.status(400).json(e)
  }
}

updateAdminInfo = async(req,res) => {
    let admin = req.admin;

    try {
      if(req.body.password || req.body.password2) {
        if(!req.body.password) throw 'Enter your old password'
        if(!req.body.password2) throw 'Enter new password'
        let response = await bcrypt.compare(req.body.password, admin.password);
        if (!response) throw 'Incorrect password';
        if(!response) admin.error = 'Incorrect password';
        admin.password = req.body.password2;
      }
       await user.save();
       res.json(user);
    } catch(e) {
      res.json(e)
    }
}

getAllAdmins = async (req,res) => {
  try {
    let admins = await Admin.find({})
    res.json(admins);
  } catch(e) {
    console.log(e)
  }
}

getCurrentUser = async (req,res) => {
  let admin = req.admin;
  try {
    res.json(admin);
  } catch(e) {
    res.json(e)
  }
}

module.exports = {
    signUp,
    login,
    logout,
    updateAdminInfo,
    getAllAdmins,
    getCurrentUser
  }
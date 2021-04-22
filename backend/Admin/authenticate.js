const jwt = require('jsonwebtoken')
const Admin = require('../Admin/AdminModel')

authenticate = async (req, res, next) => {

  let token = req.header('admin-id')
  try {
    let decoded = await jwt.verify(token, 'dntpwnme8') // decoded._id
    let admin = await Admin.findOne({
      _id: decoded._id,
      "sessionToken.token": token
    })
    if (!admin) throw 'Authentication failed'
    req.admin = admin
    req.token = token
    next()
  } catch (e) {
    e = e.message == "jwt malformed" ? 'Wrong session token' : e
    res.status(401).json(e)
  }
  
}

module.exports = {
  authenticate
}
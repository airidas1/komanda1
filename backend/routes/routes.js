const DataController = require('../Data/DataController/DataController')
const AdminController = require('../Admin/AdminController')
const AdminMiddleware = require('../Admin/authenticate')
const router = require('express').Router()


/* General Data Routes */
router.get('/data', DataController.getData)
router.get('/getAllData', DataController.getAllData)
/* General Admin Routes */
router.post('/admin/login', AdminController.login)
router.get('/admin/logout', AdminMiddleware.authenticate, AdminController.logout)
router.post('/admin/update', AdminMiddleware.authenticate, AdminController.updateAdminInfo)
router.post('/admin/new', AdminController.signUp)
router.get('/admin/all', AdminMiddleware.authenticate,AdminController.getAllAdmins)
router.get('/currentAdmin', AdminMiddleware.authenticate, AdminController.getCurrentUser)
router.post('/admin/registerAdmin', AdminMiddleware.authenticate, AdminController.signUp)
/* Manipulate a single object (Admin privilege) */
/* Update post */
router.put('/dataUpdate', AdminMiddleware.authenticate, DataController.updateDataInfo)
/* Post new post */
router.post('/dataPost', AdminMiddleware.authenticate, DataController.saveData)
/* Delete post */
router.delete('/data', AdminMiddleware.authenticate, DataController.removeData)


module.exports = router
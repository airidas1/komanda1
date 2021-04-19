const DataController = require('../Data/DataController/DataController')
const Data = require('../Data/DataModel/DataModel')

const router = require('express').Router()

router.get('/data', DataController.getData)
router.post('/dataPost', DataController.saveData)
router.delete('/data', DataController.removeData)
router.post('/dataUpdate', DataController.updateDataInfo)



module.exports = router
const router = require('express').Router()

router.get('/', (req, res) => {
    res.json('Hello Team1')
})

module.exports = router
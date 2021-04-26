const Data = require('../DataModel/DataModel')

getData = async (req, res) => {
    try {
        const pageSize = 20;
        const page = parseInt(req.query.page)
        const skip = (page - 1) * pageSize
        let data = await Data.find({})
        .skip(skip)
        .limit(pageSize)
        res.json(data)
    } catch(e) {
        console.log(e)
    }
}
getAllData = async (req, res) => {
    try {
        let data = await Data.find({})
        res.json(data)
    } catch(e) {
        console.log(e)
    }
}


saveData = async (req, res) => {
    let data = new Data({
        'Grupė': req.body['Grupė'],
        'Pagrindinis tipas': req.body['Pagrindinis tipas'],
        'Pavadinimas': req.body['Pavadinimas'],
        'Savivaldybė': req.body['Savivaldybė'],
        'Teisinė forma': req.body['Teisinė forma'],
        'Telefonas': req.body['Telefonas']
    })
    try {
        let savedPost = await data.save()
        res.json(savedPost)
    } catch(e) {
        console.log(e)
    }
}

removeData = async (req, res) => {
    try {
        await Data.findOneAndRemove({ _id: req.body.id })
        res.json('success')
    } catch (e) {
        res.status(400).json(e)
    }
}

updateDataInfo = async(req,res) => {
    try {
        let updated = await Data.findOneAndUpdate({ _id: req.body._id }, req.body)
        res.json(updated)
    } catch (e) {
        res.status(400).json(e)
    }
}



module.exports = {
    getData,
    saveData,
    removeData,
    updateDataInfo,
    getAllData
  }
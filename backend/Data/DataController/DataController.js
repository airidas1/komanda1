const Data = require('../DataModel/DataModel')

getData = async (req, res) => {
    try {
        let data = await Data.find()
        res.json(data)
    } catch(e) {
        console.log(e)
    }
}

saveData = async (req, res) => {
    let data = new Data({
        'Juridinio asmens kodas': true, 
        'Pavadinimas': 'String', 
        'Buveinė (adresas)': 1,
        'Telefonas': 'String',
        'Grupė': 'String',
        'Savivaldybė': 'String',
        'Pagrindinis tipas': 'String',
        'El. paštas': 'String',
        'Teisinė forma': 'String'
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
        await Data.findOneAndRemove({ _id: '607dc5d371284455cc7a4af5' })
        res.json('success')
    } catch (e) {
        res.status(400).json(e)
    }
}

updateDataInfo = async(req,res) => {
    try {
        let updated = await Data.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.json(updated)
    } catch (e) {
        res.status(400).json(e)
    }
}



module.exports = {
    getData,
    saveData,
    removeData,
    updateDataInfo
  }
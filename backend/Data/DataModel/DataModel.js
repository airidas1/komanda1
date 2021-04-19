const mongoose = require('mongoose')

let DataSchema = new mongoose.Schema({ 
    'Juridinio asmens kodas': Boolean, 
    'Pavadinimas': String, 
    'Buveinė (adresas)': Number,
    'Telefonas': String,
    'Grupė': String,
    'Savivaldybė': String,
    'Pagrindinis tipas': String,
    'El. paštas': String,
    'Teisinė forma': String
});

let Data = mongoose.model('Data', DataSchema)

module.exports = Data


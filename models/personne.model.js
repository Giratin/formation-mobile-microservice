const mongoose = require('mongoose');

const personneSchema = mongoose.Schema({
    cin: {
        type: String,
        unique: true
    },
    nom: {
        type: String
    },
    age: {
        type: Number
    },
    classe : {
        type: mongoose.Types.ObjectId,
        'ref' : "classe"
    }
},{
    timestamps: true
});

const classeSchema = mongoose.Schema({
    number: {
        type: String,
        unique: true
    },
},{
    timestamps: true
});

//5fe08c8200e077d966ef448c
const Personne = mongoose.model('personne',personneSchema);
const Classe = mongoose.model('classe',classeSchema);

module.exports = {Personne , Classe};

const { Personne, Classe } = require('../models/personne.model');


module.exports = {
    fetchAll: async (req,res,next) =>{
        const presonnes = await Personne.find();
        res.json(presonnes)
    },
    create: async( req,res, next)=>{
        const { cin , nom, age } = req.body;
        const personneExist = await Personne.findOne({ cin });
        if(personneExist){
            return res.status(400).json({ Message: "Personne Existe" })
        }
        const personne = new Personne({
            cin, nom, age
        });
        await personne.save();
        res.json(personne);
    },
    fetchOne: async( req,res, next)=>{
        const { id } = req.params;
        const personne = await Personne.findOne({ _id : id });
        res.json(personne);
    },
    updateOne: async( req,res, next)=>{
        const { id } = req.params;

        //Mettre à jour Personne et retourner le nouveau document mis à jour
        //const p = await Personne.findByIdAndUpdate(id, {nom, age}, {new: true});

        //Ou
        const personne = await Personne.findOne({ _id : id });

        if(!personne){
            return res.status(404).json({ Message: "Personne introuvable" })
        }
        const {nom, age } = req.body;
        personne.nom = nom; 
        personne.age = age; 
        await personne.save();
        res.json({personne})
    },
    deleteOne: async( req,res, next)=>{
        const { id } = req.params;
        const personne = await Personne.findOne({ _id : id });

        if(!personne){
            return res.status(404).json({ deleted: true , Message: "Personne introuvable" })
        }

        await Personne.remove({ _id: id });
        res.json({ deleted: true , personne})
    },
}
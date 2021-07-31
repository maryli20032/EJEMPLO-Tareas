const noteCtrl ={};
const Note = require('../models/Note');

noteCtrl.getNotes = async (req,res) => {
    const Notes = await Note.find(function(){ //obtiene una lista de notas

    });
    res.json(Notes) //responde con la lista de notas
}

noteCtrl.createNotes = async (req,res) => {
    const {title, content, date, author} = req.body;

    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });

    await newNote.save();
    
    res.json({message:'Nota guardada'})
}


noteCtrl.updateNotes = async (req, res) => {
    const {title, content, author} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title: title,
        content: content,
        author: author
    })
    res.json({message:'Nota modificada'})
}


noteCtrl.deleteNotes = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id});
    res.json({message:'Nota eliminada'})
}


noteCtrl.getOneNote = async (req, res) => {
   const nota = await Note.findById(req.params.id);
    res.json(nota)}

module.exports = noteCtrl
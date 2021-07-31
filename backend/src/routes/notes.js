//aca van todas las rutas que de las notas

const {Router} = require('express');
const router = Router();
const {getNotes, createNotes, updateNotes, deleteNotes, getOneNote} = require('../controlers/notes.controlers');

router.route('/')
    .get(getNotes)
    .post(createNotes)

router.route('/:id')
    .get(getOneNote)
    .put(updateNotes)
    .delete(deleteNotes)

module.exports = router;
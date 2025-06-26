import { Router } from 'express';
import {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} from '../controllers/notesControllers.js';

const router = Router();

// Get all notes
router.get('/', getAllNotes);
// Get single note
router.get('/:id', getSingleNote);
// Create new note
router.post('/', createNote);
// Update a note
router.put('/:id', updateNote);
// Delete a note
router.delete('/:id', deleteNote);

export default router;

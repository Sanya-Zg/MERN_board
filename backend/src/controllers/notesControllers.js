import mongoose, { trusted } from 'mongoose';
import Note from '../models/Note.js';

export const getSingleNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({ message: 'Note not found' });
    }
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    console.log('Error in getAllNotes controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find({}).sort({createdAt: -1});
    res.status(200).json(notes);
  } catch (error) {
    console.log('Error in getAllNotes controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log('Error in createNote controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Note not found' });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      {
        new: true,
      }
    );
    if (!updatedNote)
      return res.status(404).json({ message: 'Note not found' });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log('Error in updating controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'Note not found' });
    }
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json('Success delete');
  } catch (error) {
    console.log('Error in deleting controller', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

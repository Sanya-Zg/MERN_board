
export const getAllNotes = (req, res) => {
  res.status(200).json({ message: 'Get all notes' });
};

export const createNote = (req, res) => {
  res.status(201).json({ message: 'Create new note' });
};

export const updateNote = (req, res) => {
  res.status(200).json({ message: 'Update a note' });
};

export const deleteNote = (req, res) => {
  res.status(200).json({ message: 'Delete a note' });
};
import React from 'react';
import AddNote from '../add-note/AddNote.tsx';
import NoteModel from '../../../models/NoteModel.ts';
import Note from '../note/Note.tsx';
import { Box } from '@mui/material';
import './NotesList.css';

interface NotesListProps {
    notes: NoteModel[];
    handleAddNote: (text: string) => void;
    handleDeleteNote: (id: number) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <Box className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </Box>
    );
};

export default NotesList;

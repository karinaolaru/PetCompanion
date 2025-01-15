import React from 'react';
import './Note.css';
import { Box } from '@mui/material';

interface NoteProps {
    id: number;
    text: string;
    date: string;
    handleDeleteNote: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, text, date, handleDeleteNote }) => {
    return (
        <Box className='note'>
            <Box className='note-content'>
                <p>{text}</p>
                <small>{date}</small>
            </Box>
            <Box className='note-footer'>
                <button className='delete-icon' onClick={() => handleDeleteNote(id)}>
                    Delete
                </button>
            </Box>
        </Box>
    );
};

export default Note;

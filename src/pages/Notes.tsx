import { useState, useEffect } from 'react';
import NotesList from '../components/notes/notes-list/NotesList.tsx';
import Search from '../components/notes/search/Search.tsx';
import { Box } from '@mui/material';
import './Notes.css';

const Notes = () => {
	const [notes, setNotes] = useState([
		{
			id: 1,
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: 2,
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: 3,
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: 4,
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedNotes = localStorage.getItem('notes');
		if (savedNotes) {
			setNotes(JSON.parse(savedNotes));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'notes',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text: string) => {
		const date = new Date();
		const newNote = {
			id: notes.length + 1,
			text: text,
			date: date.toLocaleDateString(),
		};
		setNotes((prevNotes) => [...prevNotes, newNote]);
	};

	const deleteNote = (id: number) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
	};

	return (
		<Box className="container">
			<Search handleSearchNote={setSearchText} />
			<NotesList
				notes={notes.filter((note) =>
					note.text.toLowerCase().includes(searchText.toLowerCase())
				)}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
			/>
		</Box>
	);
};

export default Notes;

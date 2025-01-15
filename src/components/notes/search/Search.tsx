import { Box } from '@mui/material';
import React from 'react';
import { MdSearch } from 'react-icons/md';
import './Search.css';

interface SearchProps {
    handleSearchNote: (text: string) => void;
}

const Search: React.FC<SearchProps> = ({ handleSearchNote }) => {
    return (
        <Box className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input
                onChange={(event) => handleSearchNote(event.target.value)}
                type='text'
                placeholder='type to search...'
            />
        </Box>
    );
};

export default Search;

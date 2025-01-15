import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { AppBar, Toolbar, Typography } from '@mui/material'; // Importing Material UI components

const Menu: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Pet Companion</Typography>
        <ul style={{ display: 'flex', marginLeft: 'auto' }}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/fun-facts">Fun Facts</Link></li>
          <li><Link to="/pet-profile">Pet Profile</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/" onClick={() => localStorage.clear()}>Logout</Link></li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

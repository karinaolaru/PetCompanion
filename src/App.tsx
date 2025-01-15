import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Menu from './components/menu/Menu'; // Importing the Menu component
import Notes from './pages/Notes'; // Importing the Notes component
import PetProfile from './pages/PetProfile';
import FunFacts from './pages/FunFacts';
import About from './pages/About';
import DrawerMenu from './components/drawer-menu/DrawerMenu';
import { createTheme, ThemeProvider } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#bfc7f5',
    },
    secondary: {
      main: '#F5EDBF',
    },
  },
});

const App: React.FC = () => {
  const navigate = useNavigate();

  const isOnLandingPage = () => {
    return window.location.pathname.endsWith('/PetCompanion') || window.location.pathname.endsWith('/PetCompanion/');
  }

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn'); // Check local storage for login status

    if (isLoggedIn) {
      if (isOnLandingPage()) {
        navigate('/fun-facts'); // Redirect to FunFacts if logged in and is trying to access the landing page
      }
    } else {
      navigate('/'); // Redirect to LandingPage if not logged in
    }
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      {isOnLandingPage() ? null : <DrawerMenu />} {/* Render the Menu component if not on the landing page */}
      {/* {isOnLandingPage() ? null : <Menu />} */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

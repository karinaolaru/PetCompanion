import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Menu from './components/Menu'; // Importing the Menu component
import PetProfile from './pages/PetProfile';
import FunFacts from './pages/FunFacts';
import About from './pages/About';

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn'); // Check local storage for login status

    if (isLoggedIn) {
      if (window.location.pathname === '/') {
        navigate('/PetCompanion/fun-facts'); // Redirect to FunFacts if logged in and is trying to access the landing page
      }
    } else {
      navigate('/PetCompanion'); // Redirect to LandingPage if not logged in
    }
  }, [navigate]);

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pet-profile" element={<PetProfile />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;

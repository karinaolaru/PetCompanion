import React, { FormEvent, useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password.length > 8) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/fun-facts');
    } else {
      alert('Please enter a valid email and a password longer than 8 characters.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Pet Companion
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Keep track of your pet's needs, appointments, and fun facts!
        </Typography>

        <form onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
        </form>
      </Box>
    </Container>
  );
};

export default LandingPage;

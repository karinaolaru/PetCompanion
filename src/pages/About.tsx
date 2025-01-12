import React from 'react';
import { Typography, Container, Box, TextField, Button } from '@mui/material';

const About: React.FC = () => {
  const handleContactSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Contact form submitted! (This is just a demo)');
  };

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          About Pet Companion
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Pet Companion is designed to help pet owners manage their pet's needs, appointments, and fun facts.
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Developed by: John Doe, Jane Smith, and Alex Johnson
        </Typography>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Contact us:
        </Typography>
        <form onSubmit={handleContactSubmit} style={{ width: '100%', marginTop: '16px' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Your Name"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Your Email"
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Message"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default About;

import React, { useEffect, useState } from 'react';
import { Typography, Container, Button, Box } from '@mui/material';

const FunFacts: React.FC = () => {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFacts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/?count=3');
      const data = await response.json();
      setFacts(data.data);
    } catch (error) {
      console.error('Error fetching facts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Fun Facts About Cats
        </Typography>
        {loading ? (
          <Typography variant="body1">Loading facts...</Typography>
        ) : (
          <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 8 }}>
            {facts.map((fact, index) => (
              <li key={index}>
                <Typography variant="body1">{fact}</Typography>
              </li>
            ))}
          </ul>
        )}
        <Button variant="contained" onClick={fetchFacts} sx={{ mt: 3 }}>
          Fetch More Facts
        </Button>
      </Box>
    </Container>
  );
};

export default FunFacts;

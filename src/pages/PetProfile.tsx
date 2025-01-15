import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

type PetProfileState = {
  petName: string;
  dob: string;
  breed: string;
  image: string | null;
};

const PetProfile: React.FC = () => {
  const [profile, setProfile] = useState<PetProfileState>({
    petName: '',
    dob: '',
    breed: '',
    image: null,
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem('petProfile');
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile((prev) => ({
        ...prev,
        petName: parsedProfile.name,
        dob: parsedProfile.dateOfBirth,
        breed: parsedProfile.breed,
        image: parsedProfile.photo,
      }));
    }
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataURL = reader.result as string;
        const base64 = dataURL?.slice(dataURL.indexOf(',')+1);
        setProfile((prev) => ({ ...prev, image: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    const petProfile = {
      name: profile.petName,
      dateOfBirth: profile.dob,
      breed: profile.breed,
      photo: profile.image, // Save as Base64 string
    };
    localStorage.setItem('petProfile', JSON.stringify(petProfile));
    alert('Pet profile saved!');
  };

  return (
    <Box maxWidth="xs" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50vw' }}>
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            Pet Profile
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Pet Name"
            value={profile.petName}
            onChange={(e) => setProfile((prev) => ({ ...prev, petName: e.target.value }))}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Date of Birth"
            type="date"
            value={profile.dob}
            onChange={(e) => setProfile((prev) => ({ ...prev, dob: e.target.value }))}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Breed"
            value={profile.breed}
            onChange={(e) => setProfile((prev) => ({ ...prev, breed: e.target.value }))}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSaveProfile}
            sx={{ mt: 3, mb: 2 }}
          >
            Save Profile
          </Button>
        </Box>
      </Box>
      {profile.image && (
        <img
          src={`data:image/png;base64,${profile.image}`}
          alt="Pet"
        />
      )}
    </Box>
  );
};

export default PetProfile;

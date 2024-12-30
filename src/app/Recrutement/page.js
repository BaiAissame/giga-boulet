'use client'; // Directive pour indiquer qu'il s'agit d'un composant côté client

import * as React from 'react';
import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField
} from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function RecruitmentPage() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Rejoignez notre équipe !
        </Typography>
        <Typography variant="h6" paragraph>
          Nous sommes à la recherche de talents passionnés pour rejoindre notre équipe dynamique. Sélectionnez un type de poste ci-dessous pour commencer votre candidature.
        </Typography>
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 260 }}>
          <InputLabel id="demo-simple-select-filled-label">Sélectionner un type de poste</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            color='transparent'
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Équipier(ère) polyvalent</MenuItem>
            <MenuItem value={20}>Manager</MenuItem>
            <MenuItem value={30}>Directeur</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 260 }}>
          <InputLabel id="demo-simple-select-filled-label">Sélectionner une ville</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
          // onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Équipier(ère) polyvalent</MenuItem>
            <MenuItem value={20}>Manager</MenuItem>
            <MenuItem value={30}>Directeur</MenuItem>
          </Select>
        </FormControl>
      </Box><br></br>


      <Box>
        <Grid
          spacing={10}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between', // Alignement à la fin
            gap: '15rem',
          }}
        >
          <Box sx={{ width: '30%' }}>
            <Typography variant="h4">
              Les différents postes au sein des équipes <strong>Gigaboulet</strong>
            </Typography>
          </Box>

          <Box sx={{ width: '30%' }}>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat
            </Typography>
          </Box>
        </Grid>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Informations personnelles
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Nom"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Téléphone"
            variant="filled"
            sx={{ m: 1 }}
          />
          <TextField
            fullWidth
            label="Message de motivation"
            variant="filled"
            multiline
            rows={4}
            sx={{ m: 1 }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ m: 1 }}>
            Soumettre
          </Button>
        </form>
      </Box>

      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contacter l'équipe
        </Typography>
        <Typography variant="body1">
          Pour toute question, contactez-nous à <strong>contact@giga-boulet.com</strong>
        </Typography>
      </Box>
    </Container>
  );
}
